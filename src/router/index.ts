import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/client/HomeView.vue';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout.vue';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout.vue';
import { ref } from 'vue';
import adminRoutes from '@/config/admin_routes.config';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/NotFound.vue')
		},

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
					path: '/project/:projectId',
					component: () => import('@/views/client/ProjectDetail.vue')
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
					name: 'admin-project',
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
router.beforeEach((to, from, next) => {
	const getAccessToken = ref(localStorage.getItem('accessToken'));
	if (to.name === 'admin-project' && getAccessToken.value === null) {
		next({ path: '/sign-in' });
	} else if ((getAccessToken.value && to.name === 'sign-in') || to.name === 'sign-up') {
		next({ path: '/admin' });
	} else next();
});
export default router;
