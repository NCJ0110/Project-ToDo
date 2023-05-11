import { DOMManipulator } from "./DOMManipulator";
import { Storage } from "./Storage";
import { projectsHandler } from "..";
import { Project } from "./Project";


export class DisplayController{

    constructor(){
        this.activeProject = undefined;
    }

    initializeUI(){
        let projects = []
        
        projects = projectsHandler.getProjects();
        if(Storage.getProjects()){
            let recreateProjects = projectsHandler.getProjects();
            let rebuiltProjects = recreateProjects.map(project => {
                return new Project(project.title, project.id, project.todos);
            })

            console.log(rebuiltProjects);
            projectsHandler.reinitializeProjects(rebuiltProjects)
            projects = projectsHandler.getProjects();
        }
        this.activeProject = projects[0];
        
        DOMManipulator.createProjectsHTML(projects);
        DOMManipulator.updateActiveTitle(this.activeProject);
        DOMManipulator.displayTodosHTML(this.activeProject);
        DOMManipulator.setupListeners();
    }

    getTodo(todoValues){
        this.activeProject.addTodo(todoValues)

        DOMManipulator.displayTodosHTML(this.activeProject);
    }

}