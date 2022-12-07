<template>
    <p id="friends">
        <h3>Friends</h3>
    </p>
    <el-row v-for="friend of friends">
        <router-link :to="`/player/${friend}`" tag="p"><p> {{ friend }} </p></router-link>
        <router-link :to="`/message/${friend}`"><el-button>Message</el-button></router-link>
    </el-row>
    
    <p v-if="pendingFriendNames.length > 0" id="pending">
        <h3>Pending Friend Requests</h3>
        <el-row v-for="friend of pendingFriendNames">
            <div>{{ friend }}</div>
            <el-button @click="accept(friend)">Accept</el-button>
            <el-button @click="deny(friend)">Deny</el-button>
        </el-row>
    </p>

</template>

<script setup lang="ts">

    import {ref} from 'vue'
    import Cookies from 'js-cookie' 

    const player = ref({})
    const pendingFriendNames = ref<string[]>([]);
    const friends = ref<any[]>([]);

    function display_friends() {
        fetch('http://localhost:8000/display_friends', {

            method: 'GET',

            credentials: 'include', 

            mode: 'cors',

            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

        } )
        .then((response) => response.json())
         .then((data) => {
            console.log('Success:', data);
            //do something useful with data here (store data, display, etc)
            friends.value = data;
         } )

        .catch( (error) => {
            console.error('Error:', error);
        }
      );
    }

    display_friends()

    function get_pending_friends() {
        fetch('http://localhost:8000/get_pending_friends', {

            method: 'GET',

            credentials: 'include', 

            mode: 'cors',

            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

        } )
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            //do something useful with data here (store data, display, etc)
            pendingFriendNames.value = data;
         } )

        .catch( (error) => {
            console.error('Error:', error);
        }
      );
    }

    get_pending_friends()

    function accept(friend: string) {
        let data = new FormData();
        data.append('friend', friend)

        fetch('http://localhost:8000/accept_friend_request/', {

            method: 'POST',

            credentials: 'include', 

            mode: 'cors',

            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

            body: data,

        })
        .then(() => {
            // move accepted friend to accepted friends and remove from pending friends in javascript
            pendingFriendNames.value = pendingFriendNames.value.filter((pendingFriend) => pendingFriend !== friend)
            friends.value.push(friend)
        })
    }

    function deny(friend: string) {
        let data = new FormData();
        data.append('friend', friend)

        fetch('http://localhost:8000/deny_friend_request/', {

            method: 'POST',

            credentials: 'include', 

            mode: 'cors',

            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },

            body: data,

        })
        .then(() => {
            // move accepted friend to accepted friends and remove from pending friends in javascript
            pendingFriendNames.value = pendingFriendNames.value.filter((pendingFriend) => pendingFriend !== friend)
        })
    }

</script>
