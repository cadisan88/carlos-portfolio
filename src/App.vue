<script setup>
import Navigation from './components/NavBar.vue'
import SocialNet from './components/SocialNet.vue'
import HomeContent from './components/HomeContent.vue'
import Statistic from './components/AboutStatistic.vue'

const statistics = ref([
  { id:1, number:'+9', label: 'years of experience as software dev ' },
  { id:2, number: '2', label: 'fluent languages. English and Spanish' },
  { id:3, number: '+10', label: 'technologies in my stack' },
  { id:4, number: '+15', label: 'projects designed, developed and deployed' }
])

</script>

<template>
  <div class="app">
    <Navigation/>
    <div class="socialNet"><SocialNet/></div>
    <div class="homeContent"><HomeContent/></div>
    <div class="statistic">
      <Statistic
        v-for="statistic in statistics"
        :key="statistic.id"
        :number="statistic.number"
        :label="statistic.label"
      ></Statistic>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
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

.statistic {
  display: inline-flex;
  margin-top: 500px;
}
</style>
