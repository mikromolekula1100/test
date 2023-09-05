<template>
    <div id="timelineComponent">
        
    </div>
</template>

<script>
import shootData from "../../public/shoot.json"


export default {
    name: 'timelineComponent',
    data(){
        return{
            shoot: shootData,
        }
    },
    mounted(){

        console.log(this.$data.shoot);
    },
    methods:{
        /*createTimeline(){
            var newShoot = [];

            for(var i = 0; i < this.$data.shoot.length; i++){
                newShoot[i] = 
                {
                    id: this.$data.shoot[i].id, 
                    content: this.$data.shoot[i].satellite + " " + this.$data.shoot[i].point + " " + this.$data.shoot[i].volume,
                    start: this.$data.shoot[i].startTimePeriod,
                    end: this.$data.shoot[i].endTimePeriod
                }
            }
            
            var container = document.getElementById('timelineComponent');
            var items = new DataSet(newShoot);
            var options = {
                width: '100%',
                height: '100%',
            };
            var timeline = new Timeline(container, items, options);

            console.log('timeline:', timeline);
        }*/
    }

    
}
</script>

<style>
#timelineComponent {
    width: 80vw;
    height: 100vh;
    background-color: black;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>