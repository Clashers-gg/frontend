<template>
    <div>
        <h1>Welcome to Your Clash, {{player.name}}!</h1>
    </div>

    <div style="margin: 20px 0" />

    <div v-if="Object.keys(player).length > 0">
        <img width="100" height="100" :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${player.profileIconId}.png`" >
        <p>Summoner Level: {{player.summonerLevel}} </p>
    </div>

</template>

<script setup lang="ts">
    import Cookies from 'js-cookie';
    import {ref} from 'vue'

    const player = ref({})

            fetch(`http://localhost:8000/get_player_info`, {

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
</script>
