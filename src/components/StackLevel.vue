<script setup>
import StackTechnology from './StackTechnology.vue'

const props = defineProps({
    stackLevel: String,
    technologies: Array
})


</script>

<template>
    <div class="stack-level-container">
        <h3>{{ stackLevel }}</h3>
        <div class="stack-level-tech">
            <StackTechnology 
                v-for="technology in technologies"
                :techName=technology.techName
                :techImage=technology.techIma
            ></StackTechnology>
        </div>
    </div>
</template>

<style>
.stack-level-container{
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3{
        font-family: 'Roboto';
        font-weight: 700;
        font-style: italic;
        font-size: 26px;
        color: #F3F9F8;
        align-self: center;
        padding-top: 120px;
    }
}

.stack-level-tech{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>