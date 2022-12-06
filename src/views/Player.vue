<template>

  <div v-if="Object.keys(player).length > 0">
        <p>Name: {{ player.name }} </p>
        <img width="100" height="100" :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${player.profileIconId}.png`" >
        <p>Summoner Level: {{ player.summonerLevel }} </p>
    </div>

    <div style="margin: 20px 0" />

    <el-button @click="send_request">Friend Request</el-button>

</template>

  
  <script setup lang="ts">

    import {ref} from 'vue'
    import Cookies from 'js-cookie' 
    import { useRoute } from 'vue-router';

    const player = ref({})
    const route = useRoute()
    const player_name = route.params.player_name

    function get_player_data(player_name) {
      fetch(`http://localhost:8000/friend_finder/?player_name=${player_name}`, {

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

    get_player_data(player_name)

    function send_request() {
      let data = new FormData();
      data.append('friend', player_name)

      fetch('http://localhost:8000/send_friend_request/', {
        method: 'POST', // or 'PUT'

        credentials: 'include', 

        mode: 'cors',

        body: data,

        headers: {
          'X-CSRFToken': Cookies.get('csrftoken')
        },
      })

      .then((response) => {
        console.log('Success', response.text)
      })

      .catch((error) => {
        console.error('Error:', error);
        } 
      );
    }

  </script>
