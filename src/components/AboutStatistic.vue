<script setup>
defineProps(['number','label'])
</script>

<template>
    <div class="stat-container">
        <h2>{{ number }}</h2>
        <h3>{{ label }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.stat-container {
    display: flex;
    flex-direction: row;
    background-color: #1B1B1B;
    border: 1px #1E1E1E solid;
    box-shadow: 4px 4px #000000 25%;
    height: 289px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    padding-top: 100px;

    h2 {
        font-family: 'Roboto';
        font-weight: 200;
        font-size: 80px;
        color: #F3F9F8;
    }

    h3 {
        font-family: 'Roboto';
        font-weight: 100;
        font-size: 23px;
        color: #F3F9F8;
    }
}

.stat-container:hover {
    background-color: #ED8404;
}



</style>