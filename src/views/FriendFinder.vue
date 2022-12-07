<template>
    <div>
        <h1>Friend Finder</h1>
    </div>

    <div style="margin: 20px 0" />

    <div>
        <el-input
        v-model="player_name"
        placeholder="Input Player Name Here"
        />
        <el-button @click="search">Search</el-button>
    </div>

    <div v-if="Object.keys(player).length > 0">
        <router-link :to="`/player/${player.name}`" tag="p"><p>Name: {{ player.name }} </p></router-link>
        <img width="100" height="100" :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${player.profileIconId}.png`" >
        <p>Summoner Level: {{player.summonerLevel}} </p>
    </div>

</template>

<script setup lang="ts">

    import {ref} from 'vue'
    import Cookies from 'js-cookie' 

    const player_name = ref('')

    const player = ref({})

    function search() {

        fetch(`http://localhost:8000/friend_finder/?player_name=${player_name.value}`, {

            method: 'GET',

            credentials: 'include', 

            mode: 'cors',

            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

        } )

        .then((response) => response.json() )
        .then((data) => {
            console.log('Success:', data);
            //do something useful with data here (store data, display, etc)
            player.value = data;
        } )

        .catch( (error) => {
                console.error('Error:', error);
            }
        );
    } 

</script>