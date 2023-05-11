import { displayController } from "..";

export class DOMManipulator {

    static setupListeners(){

        //listeners for project form
        document.addEventListener('click', (e) => {
            const addTodoFormEl = document.querySelector('.add-todo-form');
            
            //create project form event delegation.
            if(e.target.classList.contains('fa-calendar-plus')){
                //open form
                const formTitle = document.querySelector('.todo-add-form-title');
                formTitle.innerText = "Create Todo"
                addTodoFormEl.classList.add('add-todo-form-active');
                
            } else if(e.target.classList.contains('fa-arrow-left')){
                //close form
                const allInputs = [...addTodoFormEl.querySelectorAll('.form-item input')];
                allInputs.forEach(input => {
                    input.value = "";
                })

                addTodoFormEl.classList.remove('add-todo-form-active');

            } else if(e.target.classList.contains('submit-add-todo')){
                const taskAndDate = [...addTodoFormEl.querySelectorAll('.form-item input')];
                const priority = addTodoFormEl.querySelector('.form-item select')
                const allInputs = [...taskAndDate, priority];
                const inputValues = allInputs.map(input => input.value);

                taskAndDate[0].classList.remove('form-input-invalid')
                taskAndDate[1].classList.remove('form-input-invalid');

                if(inputValues[0] !== "" && inputValues[1] !== ""){
                    const inputValuesObject = {
                    task: inputValues[0],
                    dueDate: inputValues[1],
                    priority: inputValues[2],
                    }   

                    allInputs.forEach(input => {
                        input.value = "";
                        if(input.id === 'priority'){
                            input.value = input.children[0].value;
                        }
                    })

                    addTodoFormEl.classList.remove('add-todo-form-active');

                    displayController.getTodo(inputValuesObject);

                } else {
                    if(inputValues[0] === ""){
                        taskAndDate[0].classList.add('form-input-invalid')
                    }
                    if(inputValues[1] === ""){
                        taskAndDate[1].classList.add('form-input-invalid');
                    }
                    
                }
            }
        })
    }

    static createProjectsHTML(projects){
        const projectsDOM = document.querySelector('.projects');
        let projectHTML = "";
        let defaultID = projects[0].id;

        projects.forEach(item => {
            if(item.id === defaultID){
                projectHTML += `
                <div class="project">
                    <h3 class="p-title">${item.title}</h2>
                </div>
                `
            } else {
                projectHTML += `
                <div class="project">
                    <h3 class="p-title">${item.title}</h2>
                    <i class="fa fa-delete-left"></i>
                </div>
            `
            }
        })

        projectsDOM.innerHTML = projectHTML;
    }

    static updateActiveTitle(project){
        const projectTitle = document.querySelector('.current-project-title');
        projectTitle.innerText = project.title;
    }

    static displayTodosHTML(project) {
        const todoContainer = document.querySelector('.todo-container');
        let todoHTML = "";
        if(project.todos.length === 0){
            todoContainer.innerText = "There are currently no Todos in this project"
        } else {
            project.todos.forEach(item => {
                todoHTML += `
                 <div class="todo">
                    <div class="priority-${item.priority}"></div>
                    <div class="info">
                        <h3 class="todo-title">${item.title}</h3>
                        <p class="todo-date">${item.date}</p>
                    </div>
                    <div class="edit-btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            `
            })

             todoContainer.innerHTML = todoHTML;
    }
        }

       
}