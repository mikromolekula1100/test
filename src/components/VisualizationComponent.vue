<template>
    <div id="visualizationComponent">

    </div>
</template>


<script>
import pointsData from "../../public/points.json"
import { Ion, Viewer, Cartesian3, Color, VerticalOrigin, PinBuilder } from "cesium";
import "cesium/Source/Widgets/widgets.css";


export default {
    name: 'visualizationComponent',
    data(){
        return{
            points: pointsData,
        }
    },
    mounted(){
        this.initCesium();
    },
    methods:{
        initCesium(){
            Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyOGY5MzM4MS1lMTVlLTQ3MTMtODlhNy1iZDY0ZWYyNjIxMTgiLCJpZCI6MTYxNjMxLCJpYXQiOjE2OTI2MDgwODZ9.LQZ2OkrcFPFf48Eq3Wi_gYaKljvonfd-9tzswS6K8zI";
            const viewer = new Viewer('visualizationComponent');
            console.log('viewer: ', viewer);

            var pinBuilder = new PinBuilder();

            for(var i = 0; i < this.$data.points.length; i++){
                viewer.entities.add({
                    label:{
                            text: this.$data.points[i].label,
                            font: "14pt monospace"
                        },
                        position : Cartesian3.fromDegrees(this.$data.points[i].latitude, this.$data.points[i].latitude),
                        billboard : {
                            image : pinBuilder.fromColor(Color.PLUM, 48).toDataURL(),
                            verticalOrigin : VerticalOrigin.BOTTOM
                        }
                });
            }
        }
    }
};
</script>

<style scoped>
#visualizationComponent {
    width: 80vw;
    height: 100vh;
    background-color: black;
    margin: 0;
    padding: 0;
    text-align: center;
}
</style>