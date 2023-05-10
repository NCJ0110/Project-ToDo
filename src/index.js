import './styles/styles.css'
import {ProjectsHandler} from './modules/ProjectsHandler';
import { DisplayController } from './modules/DisplayController';

const projectsHandler = new ProjectsHandler();

document.addEventListener('DOMContentLoaded', () => {
    DisplayController.initializeUI();
    
})

export {projectsHandler}
