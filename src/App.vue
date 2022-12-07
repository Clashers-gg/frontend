<template>
  <el-container>
    <el-header :style="{ boxShadow: 'var(--el-box-shadow)' }">
      <el-row>
        <el-col :sm="12" :xs="6">
          <router-link to="/" tag="button" id="title"><h1>Clashers</h1></router-link>
        </el-col>

        <el-col v-if="userLoggedIn" :sm="12" :xs="12" :style="{ minWidth: '350px'}">
          <router-link to="/dashboard" tag="button"><el-button text>Profile</el-button></router-link>
          <router-link to="/friends" tag="button"><el-button text>Friends</el-button></router-link>
          <!-- <router-link to="/clash" tag="button"><el-button text>Clash</el-button></router-link>
          <router-link to="/rankedduo" tag="button"><el-button text>Ranked Duo</el-button></router-link> -->
          <router-link to="/friendfinder" tag="button"><el-button text>Friend Finder</el-button></router-link>
          <router-link to="/logout" tag="button"><el-button text>Logout</el-button></router-link>
        </el-col>

        <el-col v-else :sm="12" :xs="12">
          <router-link to="/register" tag="button"><el-button text>Register</el-button></router-link>
          <router-link to="/login" tag="button"><el-button text>Login</el-button></router-link>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer>
      <router-link to="/about" tag="button"><el-button>Contact Us</el-button></router-link>
    </el-footer>
  </el-container>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUser } from './stores/user';

const store = useUser();
const userLoggedIn = computed(() => store.userLoggedIn);
console.log(userLoggedIn);
store.checkUserLoggedIn();
</script>

<style>
* {
  font-family: 'Arial';
}

body {
  margin: 0;
}

#title, #title:visited, #title:hover {
  font-size: 11pt;
  text-decoration: none;
  color: black;
}

el-header {
  background-color: aqua;
}
</style>
