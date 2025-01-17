<script setup>
import Navigation from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import HomeContent from './components/HomeContent.vue'
</script>

<template>
  <div class="app">
    <Navigation/>
    <HomeSection/>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  background-color: #1B1B1B;
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
