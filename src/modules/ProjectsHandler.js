import {Project} from './Project';

export class ProjectsHandler {
    constructor(){
        this.projects = [new Project('Default Project')];
    }

    getProjects(){
        return this.projects;
    }
}