<template>
  <div>
    <h1>Login Page</h1>
  </div>

  <el-input 
    v-model="username" 
    placeholder="Your Username"
  />

  <el-input 
    v-model="password"
    type="password"
    placeholder="Your Password"
    show-password
  />

  <el-button @click="login">Login</el-button>

</template>




<script setup lang="ts">

  import {ref} from 'vue'
  import Cookies from 'js-cookie' 
  import { useRouter } from 'vue-router';
  import { useUser } from '../stores/user';

  const router = useRouter();
  const store = useUser();

  const username = ref('')
  const password = ref('')


  //logic for submitting request to database here
  async function login() {

    //setting the key:value pair
    let data = new FormData();
    data.append('username', username.value);
    data.append('password', password.value);

    console.log(data);

    const getRequest = await fetch('http://localhost:8000/accounts/login/', {
      method: 'GET',
      credentials: 'include',
    } );

    //logic for submitting request to database here
    fetch('http://localhost:8000/accounts/login/', {

      method: 'POST', // or 'PUT'

      credentials: 'include', 

      mode: 'cors',

      body: data,

      headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
      },

    })

      .then((data) => {
        router.push('Dashboard')
        store.checkUserLoggedIn()
      })

      .catch((error) => {
        console.error('Error:', error);

      }
    );
  }

</script>

<style scoped>

</style>
