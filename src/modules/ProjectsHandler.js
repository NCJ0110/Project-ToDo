import {Project} from './Project';

export class ProjectsHandler {
    constructor(){
        this.projects = [new Project('Default Project')];
    }

    test(){
        console.log(this.projects);
    }
}