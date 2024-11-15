import { createRouter, createWebHistory } from "vue-router";
import HomeCubos from "./components/HomeCubos.vue";
import MarcasComponent from "./components/MarcasComponent.vue";


const myRoutes = [
    {
        path: "/", component: HomeCubos,
        
    },
    {
        path: "/cubosmarca/:marca", component: MarcasComponent,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;