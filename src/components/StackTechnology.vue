<script setup>
const props = defineProps({
    techName: String,
    techImage: String
})

function getImageUrl() {
  return new URL(`../assets/tech-stack/${props.techImage}`, import.meta.url)
}
</script>

<template>
    <div class="tecnology-container">
        <h2>{{ techName }}</h2>
        <img :src="getImageUrl()">
    </div>
</template>

<style lang="scss" scoped>
.tecnology-container{
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: 0.25s ease border-color;

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

.tecnology-container:hover {
    border-style: solid;
    border-width: 5px;
    border-image-slice: 1;
    border-image-source: linear-gradient(-135deg, #F29F05, #F3F9F8, #ED8404);
    transition: 0.25s ease all;
}
</style>