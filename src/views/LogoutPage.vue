<template>
  <div>
    <h1>See Ya!</h1>

    <h3>You succesfully logged out.</h3>
    <h3>If you want to log back in please click below</h3>
    
    <el-button 
      type="primary"
      size="large" 
      round
      link>{{button.text}}</el-button>

  </div>
</template>

<script setup lang="ts">
const button = {text:'Login'}
</script>
