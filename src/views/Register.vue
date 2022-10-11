<template>
  <div>
    <h1>Create Your Account</h1>
  </div>

  <el-input
      v-model="email"
      placeholder="Email"
      clearable
  />

  <div style="margin: 20px 0" />

  <el-input
      v-model="first_name"
      placeholder="First Name"
      clearable
  />

  <div style="margin: 20px 0" />

  <el-input
      v-model="last_name"
      placeholder="Last Name"
      clearable
  />

  <div style="margin: 20px 0" />

  <el-input
      v-model="password"
      placeholder="Password"
      show-password
  />

  <div style="margin: 20px 0" />

  <el-button type="register" @click="register">Register</el-button>

</template>

<script setup lang="ts">

  import {ref} from 'vue'

  const email = ref('')
  const first_name = ref('')
  const last_name = ref('')
  const password = ref('')

  function register() {
    console.log(email.value, first_name.value, last_name.value, password.value);
  //logic for submitting request to database here
  }
</script>
