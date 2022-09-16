import projectFactory from "./projectFactory";
import { pubsub } from "./pubsub";

const projects = {
    projectList : [],
    
    render: container => {
        let inbox = projectFactory(Inbox);
        let today = projectFactory(Today);
        projectList.push(inbox, today);
        
        let inboxElement = document.createElement('p');
        let todayElement = document.createElement('p');

        inboxElement.innerHTML = inbox.projectName;
        todayElement.innerHTML = today.projectName;

        //pubsub publish loadProject, inbox and loadProject, today onclick add later

        container.appendChild(inboxElement);
        container.appendChild(todayElement);

        let projectElement = document.createElement('section');
        let projectHeader = document.createElement('h2');
        let projectContainer = document.createElement('div');

        projectHeader.innerHTML = 'Projects';
        projectContainer.classList.add('projectContainer');

        //render method for addProject

        projectElement.appendChild(projectHeader);
        projectElement.appendChild(projectContainer);

        pubsub.subscribe('projectAdded', projects.projectAdded);
    },

    projectAdded: name => {
        projects.projectList.push(projectFactory(name));

        let projectContainer = document.querySelector('.projectContainer');
        let newProject = document.createElement('p');

        newProject.innerHTML = name;

        //pubsub publish loadProject onclick

        projectContainer.appendChild(newProject);
    }
};