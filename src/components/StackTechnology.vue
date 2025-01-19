<script setup>
const props = defineProps({
    techName: String,
    techImage: String
})

function getImageUrl() {
  return new URL(`../assets/${props.techImage}`, import.meta.url)
}
</script>

<template>
    <div class="tecnology-container">
        <h2>{{ techName }}</h2>
        <img :src="getImageUrl()">
    </div>
</template>

<style>
.tecnology-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 24px;
    padding: 10px;

    h2{
        font-family: 'Roboto';
        font-weight: 100;
        font-size: 18px;
        color: #F3F9F8;
    }

    img{
        width: 60px;
    }
}
</style>