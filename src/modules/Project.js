import {Todo} from './Todo';

export class Project {
    constructor(title){
        this.title = title;
        this.todos = [new Todo("test todo", "asap", "high")];

    }

    static test(){
        console.log("test");
    }
}