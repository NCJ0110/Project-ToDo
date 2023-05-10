export class DOMManipulator {

    static setupListeners(){

        //listeners for add todo and project
        document.addEventListener('click', (e) => {
            const addTodoFormEl = document.querySelector('.add-todo-form');

            if(e.target.classList.contains('fa-calendar-plus')){
                addTodoFormEl.classList.add('add-todo-form-active');
                
            } else if(e.target.classList.contains('fa-arrow-left')){
                addTodoFormEl.classList.remove('add-todo-form-active');

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