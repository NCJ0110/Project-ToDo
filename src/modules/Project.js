import { v4 as uuidv4 } from 'uuid';
import {Todo} from './Todo';
import {Storage} from './Storage';
import { projectsHandler } from '..';


export class Project {
    constructor(title, id, todos){
        this.title = title;
        this.id = id;
        this.todos = todos;
    }

    addTodo(todoValues){
        const newTodo = new Todo(todoValues.task, todoValues.dueDate, todoValues.priority, uuidv4());
        this.todos = [...this.todos, newTodo];
        const projects = projectsHandler.getProjects()
        Storage.saveProjects(projects);
    }
}