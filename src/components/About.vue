<script setup>
import { ref } from 'vue'
import Statistic from './AboutStatistic.vue'

const statistics = ref([
  { id:1, number:'+9', label: 'years of experience as software dev ' },
  { id:2, number: '2', label: 'fluent languages. English and Spanish' },
  { id:3, number: '+10', label: 'technologies in my stack' },
  { id:4, number: '+15', label: 'projects designed, developed and deployed' }
])
</script>

<template>
<div class="about-container">
    <div class="statistic-container">
        <Statistic class="statistic"
            v-for="statistic in statistics"
            :key="statistic.id"
            :number="statistic.number"
            :label="statistic.label"
        ></Statistic>
    </div>
    <div class="intro-container">
        <h1>Hi! I'm Carlos,</h1>
        <h2>a Colombian software developer focused on back-end, based in Cambridge, Ontario. </h2>
    </div>
</div>
</template>

<style>
.about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 160px;
}

.statistic-container {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
}

.statistic {
    width: 20%;
    min-width: 150px;
}

.intro-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 96px;
        color: #F3F9F8;
        align-self: center;
        padding-top: 120px;
    }

    h2 {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 40px;
        color: #F3F9F8; 
        align-self: center;
        text-align: center;
        line-height: 60px;
        width: 60%;
    }
}


</style>