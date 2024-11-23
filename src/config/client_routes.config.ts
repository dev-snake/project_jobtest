const clientRoutes = {
    home: "/",
    project: {
        root: "/project",
        details: (projectId: string) => `/project/${projectId}`
    },
    auth: {
        root: "/",
        signIn: "/sign-in",
        signUp: "/sign-up",
    }
}
export default clientRoutes;