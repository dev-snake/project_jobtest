import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            children: [
                {
                    path: "",
                    name: "",
                    component: HomeView
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue')
                }, {
                    path: "/project/:projectId",
                    name: 'project',
                    component: () => import("@/views/ProjectDetail.vue")
                }
            ]
        }
        ,

    ]
});

export default router;
