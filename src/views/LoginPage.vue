<template>
  <div>
    <h1>Login Page</h1>
  </div>

  <el-input 
    v-model="email_input" 
    placeholder="Your Email"
  />

  <el-input 
    v-model="password_input"
    type="password"
    placeholder="Your Password"
    show-password
  />

  <el-button @click="login">Login</el-button>

</template>

<script setup lang="ts">
import {ref} from 'vue'
const email_input = ref('')
const password_input = ref('')

function login() {
  console.log(email_input.value, password_input.value);
//logic for submitting request to database here

}
</script>

<style scoped>

</style>
