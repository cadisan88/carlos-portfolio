<script setup>
import Navigation from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import StackSection from './components/StackSection.vue'

</script>

<template>
  <div class="app">
    <Navigation/>
    <HomeSection/>
    <AboutSection id="about"/>
    <ExperienceSection id="experience"/>
    <StackSection id="stack"/>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
}
</style>
