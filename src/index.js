import './styles/styles.css'
import {ProjectsHandler} from './modules/ProjectsHandler';
import { DisplayController } from './modules/DisplayController';
import { Storage } from './modules/Storage';
import { Project } from './modules/Project';
import { v4 as uuidv4 } from 'uuid';

let projectsHandler; 

if(Storage.getProjects()){
    projectsHandler = new ProjectsHandler(Storage.getProjects());
} else {
    projectsHandler = new ProjectsHandler([new Project('Default Project', uuidv4(), [])]);
}

const displayController = new DisplayController();

document.addEventListener('DOMContentLoaded', () => {
    displayController.initializeUI();
    
})

export {projectsHandler, displayController}
