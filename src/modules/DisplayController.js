import { DOMManipulator } from "./DOMManipulator";
import { Storage } from "./Storage";
import { projectsHandler } from "..";


export class DisplayController{

    constructor(){
        this.activeProject = undefined;
    }

    initializeUI(){
        const projects = Storage.getProjects() ? Storage.getProjects() : projectsHandler.getProjects();
        this.activeProject = projects[0];
        DOMManipulator.createProjectsHTML(projects);
        DOMManipulator.updateActiveTitle(this.activeProject);
        DOMManipulator.displayTodosHTML(this.activeProject);

    }

}