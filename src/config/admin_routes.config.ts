const adminRoutes = {
	home: '/admin',
	project: {
		root: '/admin/projects-management',
		create: '/admin/projects-management/new',
		edit: (projectId: string) => `/admin/projects-management/${projectId}/edit`,
		delete: (projectId: string) => `/admin/projects-management/${projectId}/delete`
	}
};
export default adminRoutes;
