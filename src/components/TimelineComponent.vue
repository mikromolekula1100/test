<template>
    <div id="timelineComponent">
        
    </div>
</template>

<script>
import shootData from "../../public/shoot.json"
import { DataSet } from "vis-data/peer";
import { Timeline } from "vis-timeline/peer";
import "vis-timeline/styles/vis-timeline-graph2d.css";


export default {
    name: 'timelineComponent',
    data(){
        return{
            shoot: shootData,
            options: {
                width: '100%',
                height: '100%',
            }
        }
    },
    mounted(){
        this.createTimeline();
    },
    methods:{
        createTimeline(){
            var newShoot = [];

            const data = this.$data.shoot;

            for(var i = 0; i < data.length; i++){
                newShoot[i] = 
                {
                    id: data[i].id, 
                    content: data[i].satellite + " " + data[i].point + " " + data[i].volume,
                    start: data[i].startTimePeriod,
                    end: data[i].endTimePeriod
                }
            }
            var container = document.getElementById('timelineComponent');
            var items = new DataSet(newShoot);
            var timeline = new Timeline(container, items, this.$data.options);

            console.log('timeline:', timeline);
        }
    }

    
}
</script>

<style>
#timelineComponent {
    width: 80vw;
    height: 100vh;
    background-color: black;
    margin: 0;
    padding: 0;
    text-align: center;
}
</style>