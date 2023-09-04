import { createRouter, createWebHashHistory } from "vue-router";
import Timeline from './components/TimelineComponent.vue';
import Visualization from './components/VisualizationComponent.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/visualization', component: Visualization, alias: '/'},
        {path: '/timeline', component: Timeline},
    ]
})