<template>
    <div>
        <h1>Welcome to Your Clash, {{ userRiotID }}!</h1>
    </div>

    <div style="margin: 20px 0" />

    <div v-if="userRiotID !== ''">
        <img width="100" height="100" :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${userInfo.profileIconId}.png`" >
        <p>Summoner Level: {{userInfo.summonerLevel}} </p>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUser } from '../stores/user';

const store = useUser();
const userRiotID = computed(() => store.userRiotID);
const userInfo = computed(() => store.userInfo);
</script>
