<template>
  <div>
    <h1>Welcome to Clashers!</h1>
  </div>

  <router-link to="/login" tag="button"><el-button>Login</el-button></router-link>
  <router-link to="/register" tag="button"><el-button>Register</el-button></router-link>
  <!-- <el-button :icon="Search">Search</el-button> -->

</template>

<script setup lang="ts">

  import {Search} from '@element-plus/icons-vue'

</script>
