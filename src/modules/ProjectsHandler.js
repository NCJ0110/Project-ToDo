import {Project} from './Project';
import { v4 as uuidv4 } from 'uuid';
import { Storage } from './Storage';


export class ProjectsHandler {
    constructor(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }

    initializeProjects(){
        if(Storage.getProjects()){
            
            let rebuiltProjects = this.getProjects().map(project => {
                return new Project(project.title, project.id, project.todos);
            })

            this.projects = rebuiltProjects;
            return this.getProjects();

        } else {
            return this.getProjects();
        }
     
    }

  


}