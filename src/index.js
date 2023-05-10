import './styles/styles.css'
import {ProjectsHandler} from './modules/ProjectsHandler';


document.addEventListener('DOMContentLoaded', () => {
    const projectsHandler = new ProjectsHandler();
    projectsHandler.test();
})