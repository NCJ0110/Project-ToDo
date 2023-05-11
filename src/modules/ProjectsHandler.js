import {Project} from './Project';
import { v4 as uuidv4 } from 'uuid';


export class ProjectsHandler {
    constructor(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }

    reinitializeProjects(recreatedProjects){
        this.projects = recreatedProjects;
    }

  


}