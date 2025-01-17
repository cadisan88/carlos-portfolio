<script>

import { ref } from 'vue'

//const mobile = ref(false)
const scrollPosition = ref(false)
const windowWidth = ref(false)
</script>

<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav>
            <ul class="navigation">
                <li><router-link class="link" :to="{ name: '' }">About</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Experience</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Stack</router-link></li>
                <li class="li-hero"><router-link class="link-hero" :to="{ name: '' }">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

header {
    //border: 1px solid blue;
    //background-color: rgba(0,0,0,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    margin-top: 0px;
}

nav {
    //border: 1px solid greenyellow;
    display: flex;
    flex-direction: row-reverse;
    padding: 0px 24px;
    transition: .5s ease all;
    width: 100%;
    margin: 0 auto;
    background-color: #181818;
    font-family: 'Roboto';
    font-size: 20px;
    
    ul,
    .link {
        //border: 1px solid red;
        font-weight: 500;
        color: #F3F9F8;
        list-style: none;
        text-decoration: none;
    }

    li {
        //text-transform: uppercase;
        display: inline-block;
        padding: 0px 50px;
        margin-left: 0px;
    }

    .link {
        font-weight: 300;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;

        &:hover {
            color: #ED8404;
            border-color: #ED8404;
        }
    }

    .li-hero {
        background-color: #F29F05;
        padding: 25px 24px;
    }

    .link-hero {
        font-weight: 600;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;

        &:hover {
            color: #161616;
            border-color: #161616;
        }
    }
}

.roboto-300 {
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 20;
  font-variation-settings:
    "wdth" 100;
}


</style>
