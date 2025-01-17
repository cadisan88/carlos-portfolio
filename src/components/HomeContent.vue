<script>

</script>

<template>
    <div class="homeContentWrap">
        <span>CARLOS DIAZ</span>
        <img src="@/assets/photo.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.homeContentWrap {
    position: relative;
}

span {
    border: 1px solid red;
    font-family: 'Orbitron';
    font-weight: 400;
    font-size: 128px;
    color: #F3F9F8;
    white-space: nowrap;
    position: absolute;
    left: calc(1em - 10px);
}

img {
    border: 1px solid coral;
    position: absolute;
    width: 435px;
    //top: 1010px;
    left: 10em;
}
</style>
