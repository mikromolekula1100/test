import VueRouter from "vue-router";
import Timeline from './components/TimelineComponent.vue';
import Visualization from './components/VisualizationComponent.vue';
import NotFound from './components/NotFoundComponent.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/visualization', component: Visualization, alias: '/'},
        {path: '/timeline', component: Timeline},
        {path: '*', component: NotFound},
    ]
})
export default router;