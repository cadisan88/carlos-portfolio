<script setup>
import HomeSocialNetworks from './HomeSocialNetworks.vue'
import HomeContent from './HomeContent.vue'
import HomeDescription from './HomeDescription.vue'
</script>

<template>
  <div class="home-container">
    <div class="home-top">
      <HomeSocialNetworks/>
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
    border: solid 1px red;
    display: flex;
    width: 100%;
  }
}
</style>
