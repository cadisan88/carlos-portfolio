<script setup>
import Navigation from './components/NavBar.vue'
import SocialNet from './components/SocialNet.vue'
import HomeContent from './components/HomeContent.vue'
import About from './components/About.vue'
</script>

<template>
  <div class="app">
    <Navigation/>
    <div class="socialNet"><SocialNet/></div>
    <div class="homeContent"><HomeContent/></div>
    <About/>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  background-color: #181818;
}

.socialNet {
  /*border: 1px solid blue;*/
  display: inline-flex;
  width: 10%;
  height: 650px;
}

.homeContent {
  border: 1px solid cyan;
  width: 90%;
  display: inline-flex;
  margin-top: 82px;
  margin-bottom: 0px;
}
</style>
