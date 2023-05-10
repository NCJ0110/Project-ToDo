export class DOMManipulator {
    

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
}