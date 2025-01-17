<script setup>
defineProps(['number','label'])
</script>

<template>
    <div class="statcontainer">
        <h2 class="datanum">{{ number }}</h2>
        <h3 class="datatext">{{ label }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.statcontainer {
    background-color: 1E1E1E;
    box-shadow: 4px 4px #000000 25%;
}
</style>