<script>

</script>

<template>
    <div class="home-content-container">
        <h1>CARLOS DIAZ</h1>
        <div class="photo-wrap">
            <img src="@/assets/photo.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-content-container {
    width: 90%;
    height: auto;
    min-height: calc(100vh - 82px - 141px);
    display: flex;
    justify-content: center;

    h1 {
        white-space: nowrap;
        font-family: 'Orbitron';
        font-weight: 400;
        font-size: 128px;
        color: #F3F9F8;

        position: absolute;
        left: 50vw;
        transform: translateX(-50%);
        z-index: 100;
    }

    .photo-wrap {
        width: 584px;
        height: 584px;
        display: flex;
        align-items: flex-end;

        position: relative;
        top: calc(100% - 584px);
        left: calc(33% - 292px);
        bottom: 0px;

        background-image: radial-gradient(#3C3C3C 0%, #1B1B1B 70%);
        justify-content: center;

        img {
            display: flex;
            position: relative;
            bottom: -131px;
            width: calc(435px * 1);
            height: calc(580px * 1);
            z-index: 110;
        }   
    }
}
</style>
