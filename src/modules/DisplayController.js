import { DOMManipulator } from "./DOMManipulator";
import { Storage } from "./Storage";
import { projectsHandler } from "..";


export class DisplayController{
    static initializeUI(){
        if(!Storage.getProjects()){
            const projects = projectsHandler.getProjects();
            DOMManipulator.createProjectsHTML(projects);
        }
       
    }
}