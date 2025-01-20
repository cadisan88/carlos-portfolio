<script setup>
import { ref } from 'vue'
import JobExperience from './JobExperience.vue'

const experiences = ref([
  { logo:'betr-logo.png', alt:'Betr Logo'},
  { logo:'fans-logo.png', alt:'FansUnite Logo'},
  { logo:'meli-logo.png', alt:'Mercado Libre Logo'},
  { logo:'bavaria-logo.png', alt:'Bavaria Logo'},
  { logo:'decameron-logo.png', alt:'Decameron Logo'},
  { logo:'wavecomm-logo.png', alt:'WaveComm Logo'},
  { logo:'huawei-logo.png', alt:'Huawei'},
  { logo:'redcom-logo.png', alt:'Redcom'},
])
</script>

<template>
  <div class="experience-container">
    <h2>I'm proud to have worked at some wonderful companies</h2>
    <div class="experiences">
      <JobExperience
        v-for="experience in experiences"
                :logo="experience.logo"
                :alt="experience.alt"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-container {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 82px);
  background-color: #ED8404;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  padding-top: 80px;

  h2 {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 40px;
      color: #F3F9F8; 
      align-self: center;
      text-align: center;
      line-height: 60px;
      width: 60vw;
      min-width: 60vw;
  }

  .experiences {
    width: 85%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    row-gap: 40px;
    justify-content: space-around;
    padding: 40px;
  }
}
</style>
