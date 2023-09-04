<template>
    <div className="visualizationComponent">
        <h2>Визуализация</h2>
    </div>
</template>


<script>
export default {
    name: 'visualizationComponent',
    data(){
        return{
            points: [],
        }
    },
    mounted(){
        this.getPoints();

        console.log(this.$data.points)
    },
    methods:{
        async getPoints(){
            var points;

            const res = await fetch("http://localhost:3000/points");
            points = await res.json();

            this.$data.points = points;

            console.log(points)
        }
    }
};
</script>

<style>
.visualizationComponent {
    width: 80vw;
    height: 100vh;
    background-color: rgb(39, 41, 43);
}
</style>