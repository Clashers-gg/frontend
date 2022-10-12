<template>
  <div>
    <h1>Welcome to Clashers!</h1>
  </div>

  <el-button>Login</el-button>

  <el-button>Register</el-button>

  <el-button :icon="Search">Search</el-button>

  <el-button>Contact Us</el-button>

</template>

<script setup lang="ts">

  import {Search} from '@element-plus/icons-vue'

</script>
