<script setup>
import { ref } from 'vue'
import StackLevel from './StackLevel.vue'

const stackLevels = ref([
  { id:1, stackLevel:'Expert', technologies:[
                                    {techName: 'PHP', techIma: 'php.png'},
                                    {techName: 'MySQL', techIma: 'mysql.png'},
                                    {techName: 'MySQL', techIma: 'mysql.png' }
                                ]
  },
  { id:1, stackLevel:'Intermediate', technologies:[
                                    {techName: 'PHP', techIma: 'php.png'},
                                    {techName: 'MySQL', techIma: 'mysql.png'},
                                    {techName: 'MySQL', techIma: 'mysql.png' }
                                ]
  },
  { id:1, stackLevel:'Learning', technologies:[
                                    {techName: 'PHP', techIma: 'php.png'},
                                    {techName: 'MySQL', techIma: 'mysql.png'},
                                    {techName: 'MySQL', techIma: 'mysql.png' }
                                ]
  },
])
</script>

<template>
    <div class="stack-container">
        <div class="stack-description">
            <p>From robust API development to seamless integrations, I leverage a modern tech stack to create efficient
                solutions that meet complex challenges.</p>
        </div>
        <div class="stack-content">
            <StackLevel
                v-for="stackLevel in stackLevels"
                :id="stackLevel.id"
                :stackLevel= "stackLevel.stackLevel"
                :technologies="stackLevel.technologies"
            ></StackLevel>
        </div>
    </div>
</template>

<style>
.stack-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.stack-description{
    width: 25%;

    p{
        font-family: 'Roboto';
        font-weight: 200;
        font-size: 25px;
        color: #F3F9F8;
        text-align: center;
    }
}

</style>