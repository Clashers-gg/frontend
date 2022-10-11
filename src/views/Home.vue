<template>
  <div>
    <h1>Welcome to Clashers!</h1>
  </div>

  <el-button type="login">Login</el-button>

  <el-button type="register">Register</el-button>

  <el-button type="primary" :icon="Search">Search</el-button>

  <el-button type="contact">Contact Us</el-button>

</template>

<script setup lang="ts">

  import {Search} from '@element-plus/icons-vue'

</script>
