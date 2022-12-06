<template>
  <div>
    <h1>Create Your Account</h1>
  </div>

  <div style="margin: 20px 0" />

  <el-input
      v-model="password"
      placeholder="Password"
      show-password
  />

  <div style="margin: 20px 0" />

  <el-input
      v-model="repeatPassword"
      placeholder="Password"
      show-password
  />

  <div style="margin: 20px 0" />

  <el-input
      v-model="riot_id"
      placeholder="Riot ID"
  />

  <div style="margin: 20px 0" />

  <el-input
      v-model="username"
      placeholder="Username"
  />

  <div style="margin: 20px 0" />

  <el-button @click="register">Register</el-button>

  <footer>
        <router-link to="/about" tag="button"><el-button>Contact Us</el-button></router-link>
    </footer>

</template>

<script setup lang="ts">

  import {ref} from 'vue'
  import Cookies from 'js-cookie' 
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const password = ref('')
  const repeatPassword = ref('')
  const riot_id = ref('')
  const username = ref('')

  /*
  username	"a"
  password1	"adsfasdfadsf"
  password2	"simulateAPIClick"
  riot_id	"abc"
  */

  async function register() {

    //setting the key:value pair
    let data = new FormData();
    data.append('password1', password.value);
    data.append('password2', repeatPassword.value);
    data.append('riot_id', riot_id.value);
    data.append('username', username.value);

    console.log(data);

    const getRequest = await fetch('http://localhost:8000/signup/', {
      method: 'GET',
      credentials: 'include',
    } );

    // const csrfToken = getRequest.headers.

    //logic for submitting request to database here
    fetch('http://localhost:8000/signup/', {

      method: 'POST', // or 'PUT'

      credentials: 'include', 

      mode: 'cors',

      body: data,

      headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
      },

    })

      .then((response) => {
        if (response.status === 302) {
          router.push('/login')
        }
      })

      .catch((error) => {
        console.error('Error:', error);

      }
    );
  }

</script>
