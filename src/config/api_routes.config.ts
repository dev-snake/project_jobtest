const apiRoutes = {
	auth: {
		signIn: `/auth/login`,
		signUp: `/auth/register`,
		logOut: '/auth/logout'
	},
	project: {
		getAll: `/project/getAll`,
		getOne: (projectId: string) => `/project/getOne/${projectId}`,
		create: `/project/create`,
		edit: (projectId: string) => `/project/${projectId}/edit`,
		delete: (projectId: string) => `/project/${projectId}/delete`
	}
};
export default apiRoutes;
