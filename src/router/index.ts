import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/client/HomeView.vue';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout.vue';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: ClientLayout,
			children: [
				{
					path: '',
					name: '',
					component: HomeView
				},

				{
					path: 'sign-in',
					name: 'sign-in',
					component: () => import('@/views/auth/SignIn.vue')
				},
				{
					path: 'sign-up',
					name: 'sign-up',
					component: () => import('@/views/auth/SignUp.vue')
				}
			]
		},
		{
			path: '/admin',
			component: AdminLayout,
			children: [
				{
					path: '',
					name: '',
					component: () => import('@/views/admin/ProjectManagement.vue')
				},
				{
					path: 'projects-management',
					name: 'projects-management',
					component: () => import('@/views/admin/ProjectManagement.vue')
				},
				{
					path: 'projects-management/new',
					name: 'projects-management/new',
					component: () => import('@/views/admin/NewProject.vue')
				},
				{
					path: 'projects-management/:projectId/edit',
					name: 'projects-management/:projectId/edit',
					component: () => import('@/views/admin/EditProject.vue')
				}
			]
		}
	]
});

export default router;
