<script setup>
import { ref } from 'vue'
import HomeSocialNetworks from './SocialNetworks.vue'
import HomeContent from './HomeContent.vue'
import HomeDescription from './HomeDescription.vue'

const linePosition = ref('top')
</script>

<template>
  <div class="home-container">
    <div class="home-top">
      <HomeSocialNetworks :line-position="linePosition"/>
      <HomeContent/>
    </div>
    <HomeDescription/>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  display: block;
  margin-top: 82px;

  .home-top {
    display: flex;
    width: 100%;
  }
}
</style>
