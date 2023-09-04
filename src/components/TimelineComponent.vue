<template>
    <div className="timelineComponent">
        <h2>План-график</h2>
    </div>
</template>

<script>


export default {
    name: 'timelineComponent',
    data(){
        return{
            shoot: [],
        }
    },
    mounted(){
        this.getShoot();

        console.log(this.shoot)
    },
    methods:{
        async getShoot(){
            var shoot;
            var shootUpd = [];

            const res = await fetch("http://localhost:3000/shoot");

            shoot = await res.json();

            for(var i = 0; i < shoot.length; i++){
                shootUpd[i] = 
                {
                    id: shoot[i].id, 
                    content: shoot[i].satellite + " " + shoot[i].point + " " + shoot[i].volume,
                    start: shoot[i].startTimePeriod,
                    end: shoot[i].endTimePeriod
                }
            }
            
            this.$data.shoot = shootUpd;
            console.log(shootUpd)
        }
    }

    
}
</script>

<style>
.timelineComponent {
    width: 80vw;
    height: 100vh;
    background-color: rgb(39, 41, 43);
}
</style>