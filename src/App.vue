<script setup>
import Navigation from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
</script>

<template>
  <div class="app">
    <Navigation/>
    <HomeSection/>
    <AboutSection id="about"/>
    <ExperienceSection id="experience"/>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
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
