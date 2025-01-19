<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    logo: String,
    alt: String
})

function getImageUrl() {
  return new URL(`../assets/${props.logo}`, import.meta.url)
}
</script>

<template>
    <div class="experience-wrapper">
        <img :src=getImageUrl() :alt=props.alt />
    </div>
</template>

<style lang="scss" scoped>
.experience-wrapper {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 6px 4px #00000025;
    height: 140px;
    width: 20%;
    min-width: 180px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: 0.7s ease all;

    img {
      width: 75%;
      object-fit: contain;
    }
}

.experience-wrapper:hover {
    background-color: #F3F9F8;
    box-shadow: 0px 0px 0px #00000025;
    transition: 0.7s ease all;
}

</style>