<template>
  <div>
    <h1>See Ya!</h1>

    <h3>You succesfully logged out.</h3>
    <h3>If you want to log back in please click below</h3>
    
    <el-button>Login</el-button>

  </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';
import { useUser } from '../stores/user';

const store = useUser();

async function logout() {
  const csrf = Cookies.get('csrftoken') || '';
  await fetch('http://localhost:8000/accounts/logout/', {
    method: 'GET',
    credentials: 'include', 
    mode: 'cors',
    headers: {
      'X-CSRFToken': csrf
    },
  })

  store.checkUserLoggedIn();
}

logout();
</script>
