export interface IProject {
	id: string;
	projectName: string;
	listOfTechUsed: string[];
	startTime: string;
	endTime: string;
	projectDescription: string;
	updated_at?: string;
	created_at?: string;
}
