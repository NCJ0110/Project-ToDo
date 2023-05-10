import './styles/styles.css'
import {ProjectsHandler} from './modules/ProjectsHandler';
import { DisplayController } from './modules/DisplayController';

const projectsHandler = new ProjectsHandler();
const displayController = new DisplayController();

document.addEventListener('DOMContentLoaded', () => {
    displayController.initializeUI();
    
})

export {projectsHandler, displayController}
