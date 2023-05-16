import { DOMManipulator } from "./DOMManipulator";
import { Storage } from "./Storage";
import { projectsHandler } from "..";
import { Project } from "./Project";


export class DisplayController{

    constructor(){
        this.activeProject = undefined;
    }

    initializeUI(){
        let projects = projectsHandler.initializeProjects();
        
        this.activeProject = projects[0];
        
        DOMManipulator.createProjectsHTML(projects);
        DOMManipulator.updateActiveTitle(this.activeProject);
        DOMManipulator.displayTodosHTML(this.activeProject);
        DOMManipulator.setupListeners();
    }

    getTodoData(todoValues){
        this.activeProject.addTodo(todoValues)

        DOMManipulator.displayTodosHTML(this.activeProject);
    }

}