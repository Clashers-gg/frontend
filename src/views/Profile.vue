<template>
    <div>
        <h1>Welcome to Your Clash, {{player.name}}!</h1>
    </div>
    
    <router-link to="/friends" tag="button"><el-button>Friends</el-button></router-link>
    <router-link to="/clash" tag="button"><el-button>Clash</el-button></router-link>
    <router-link to="/rankedduo" tag="button"><el-button>Ranked Duo</el-button></router-link>
    <router-link to="/friendfinder" tag="button"><el-button>Friend Finder</el-button></router-link>

    <footer>
        <router-link to="/about" tag="button"><el-button>Contact Us</el-button></router-link>
    </footer>

</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import Cookies from 'js-cookie' 

    const player = ref({});

    function get_player_info() {
        fetch('http://localhost:8000/get_player_info', {

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

    get_player_info()
</script>
