import { v4 as uuidv4 } from 'uuid';
import {Todo} from './Todo';


export class Project {
    constructor(title){
        this.title = title;
        this.id = uuidv4();
        this.todos = [];
    }

    addTodo(todoValues){
        this.todos = [...this.todos, todoValues];
    }
}