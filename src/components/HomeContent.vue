<script>

</script>

<template>
    <div class="homeContentWrap">
        <h1>CARLOS DIAZ</h1>
        <div class="photoContainer">
            <img src="@/assets/photo.png" alt="">
        </div>
        <div class="profileDescriptionContainer">
            <div class="profileDescriptionWrap">
                <h3 class="profileDescription">Software Developer | Backend Specialist</h3>
            </div>
        </div>
        <div class="profileDescriptionBorder"></div>
    </div>
</template>

<style lang="scss" scoped>
.homeContentWrap {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;

    h1 {
        font-family: 'Orbitron';
        font-weight: 400;
        font-size: 128px;
        color: #F3F9F8;
        position: absolute;
        transform: translateX(-50%);
        white-space: nowrap;
        left: calc(50%);
        z-index: 100;
    }

    .photoContainer {
        width: 584px;
        height: 584px;
        display: flex;
        position: absolute;
        left: calc(50% + 24px);
        top: 220px;
        background-image: radial-gradient(#3C3C3C 0%, #1B1B1B 70%);
        justify-content: center;

        img {
            display: block;
            width: 435px;
            z-index: 102;
        }
    }

    .profileDescriptionContainer {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;

        .profileDescriptionWrap {
            border: solid 1px red;
            height: 141px;
            width: 100%;
            background-color: #ED84044D;
            z-index: 101;
            padding-left: calc(12%);
            display: flex;
            align-items: center;

            h3 {
                font-family: 'Roboto';
                font-stretch: condensed;
                font-size: 26px;
                font-weight: 400;
            }
        }
    }
}


</style>
