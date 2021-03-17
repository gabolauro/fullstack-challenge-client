
export class TaskItem {

	id?: number;
	name: string;
	description: string;
	manager: string;
	asignated: string;
	status?: string;
	menu?: boolean;
	delete?: boolean;
	date?: Date;

	constructor(name: string, description: string, manager: string, asignated: string) {

		this.name = name;
		this.description = description;
		this.manager = manager;
		this.asignated = asignated;

	} 
}

