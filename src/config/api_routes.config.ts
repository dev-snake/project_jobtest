const API_URL: string = 'http://localhost:8000/api';

const apiRoutes = {
	project: {
		getAll: `${API_URL}/project/getAll`,
		getOne: (projectId: string) => `${API_URL}/project/getOne/${projectId}`,
		create: `${API_URL}/project/create`,
		edit: (projectId: string) => `${API_URL}/project/${projectId}/edit`,
		delete: (projectId: string) => `${API_URL}/project/${projectId}/delete`
	}
};
export default apiRoutes;
