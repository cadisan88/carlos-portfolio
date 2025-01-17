<script>

</script>

<template>
    <div class="wrap">
        <div class="socialNetLine"></div>
        <div class="socialNetLinks">
            <ul class="socialNetLinksList">
                <li>
                    <a class="link" href="https://www.linkedin.com/in/carlos-andres-diaz/" target="_blank">
                        <img src="@/assets/linkedin.png">
                    </a>
                </li>
                <li>
                    <a class="link" href="https://github.com/cadisan88" target="_blank">
                        <img src="@/assets/github.png">
                    </a>
                </li>
                <li>
                    <a class="link" href="http://www.google.com" target="_blank">
                        <img src="@/assets/instagram.png">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    display: block;
    flex-wrap: wrap;
    flex-direction: row;
    z-index: 100;
}

.socialNetLine {
    //border: 1px solid red;
    border-right: 1px solid #F3F9F8;
    width: 50%;
    height: 365px;
    z-index: 999;
}

.socialNetLinks {
    //border: 1px solid greenyellow;
    width: 100%;
    align-items: center;
}

ul,
.link {
    list-style: none;
    text-decoration: none;
}

ul {
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    padding-top: 10px;
}

li {
    //border: 1px solid purple;
    display: block;
    padding: 4px;
    margin: 0 0 0 0;
}

img {
    width: 30px;
    transition: 0.2s ease all;
}
</style>
