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
    <HomeSection id="home"/>
    <AboutSection id="about"/>
    <ExperienceSection id="experience"/>
    <StackSection id="stack"/>


    <a href="#home" id="scroll-to-top-btn">
      <span>↑</span>
    </a>
  </div>
</template>

<style scoped>
:root {
  --animationStartsAfter: 50vh;
  --animationDistance: 50px;
}

.app {
  display: flex;
  flex-direction: column;
}

.socialNet {
  display: inline-flex;
  width: 10%;
  height: 650px;
}

.homeContent {
  width: 90%;
  display: inline-flex;
  margin-top: 82px;
  margin-bottom: 0px;
}

#home {
  display: hidden;
}

#scroll-to-top-btn {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  text-decoration: none;
  color: #F3F9F8;
  background-color: #1B1B1B;
  box-shadow: 1px 1px 10px #F3F9F8;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 5px;
  opacity: 0;

  animation: showButton linear forwards;
  animation-timeline: view();
  animation-range-start: calc(150vh + var(--animationStartsAfter));
  animation-range-end: calc(
    150vh + var(--animationStartsAfter) + var(--animationDistance)
  );

  & > span {
    font-weight: bold;
    font-size: 2rem;
  }
}

@keyframes showButton {
  from {
    transform: translateY(200px);
  }
  to {
    opacity: 1;
  }
}

</style>
