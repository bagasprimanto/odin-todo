import "./style.css"
import { format } from "date-fns";
import { TaskManager } from "./taskManager";

export class DisplayController {

    #listProject
    #listTodo
    #headingProjectName
    #taskManager
    #currentProject

    constructor() {
        // Initialize UI elements
        this.#listProject = document.querySelector("ul.list.project");
        this.#listTodo = document.querySelector("ul.list.todo");
        this.#headingProjectName = document.querySelector("h2.project-name");
        // Initialize EventListeners

        // Initialize objects
        this.#taskManager = new TaskManager();
        this.#taskManager.initializeTodos();
    }

    // Display everything initially
    initializeDisplay() {
        this.#currentProject = this.#taskManager.getProject(0);
        this.#headingProjectName.innerText = this.#currentProject.title;
        this.displayProjects();
        this.displayTodos();
    }

    // Display Project
    displayProjects() {
        this.clearProjects();

        for (const project of Object.values(this.#taskManager.projects)) {
            const deleteButton = document.createElement("BUTTON");
            deleteButton.type = "button";
            deleteButton.classList.add("btn");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "Delete";

            const projectListItem = document.createElement("li");
            projectListItem.innerText = "# " + project.title;
            projectListItem.appendChild(deleteButton);

            this.#listProject.appendChild(projectListItem);
        }
    }

    clearProjects() {
        this.#listProject.innerHTML = "";
    }

    // Display Todo List for a Project
    displayTodos() {
        this.clearTodos();

        for (const task of Object.values(this.#currentProject.tasks)) {
            const checkListDiv = document.createElement("div");
            checkListDiv.classList.add("checklist");

            const checkList = document.createElement("input");
            checkList.type = "checkbox";
            checkList.value = task.checklist;

            checkListDiv.appendChild(checkList);

            const taskHeading = document.createElement("h3");
            taskHeading.classList.add("heading");
            taskHeading.innerText = task.title;

            const taskDescription = document.createElement("p");
            taskDescription.classList.add("description");
            taskDescription.innerText = task.description;

            const priorityDiv = document.createElement("div");
            priorityDiv.classList.add("priority");
            priorityDiv.innerText = "Priority: " + task.priority;

            const dueDateDiv = document.createElement("div");
            dueDateDiv.classList.add("duedate");
            dueDateDiv.innerText = "Due: " + format(task.dueDate, "d MMM yyyy");

            const bottomDiv = document.createElement("div");
            bottomDiv.appendChild(priorityDiv);
            bottomDiv.appendChild(dueDateDiv);

            const editButton = document.createElement("BUTTON");
            editButton.type = "button";
            editButton.classList.add("btn");
            editButton.classList.add("edit");
            editButton.innerText = "Edit";

            const deleteButton = document.createElement("BUTTON");
            deleteButton.type = "button";
            deleteButton.classList.add("btn");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "Delete";

            const taskListContentDiv = document.createElement("div");
            taskListContentDiv.classList.add("content-todo");

            const taskListItem = document.createElement("li");
            taskListItem.appendChild(checkListDiv);

            taskListContentDiv.appendChild(taskHeading);
            taskListContentDiv.appendChild(taskDescription);
            taskListContentDiv.appendChild(bottomDiv);
            taskListContentDiv.appendChild(editButton);
            taskListContentDiv.appendChild(deleteButton);

            taskListItem.appendChild(taskListContentDiv);

            this.#listTodo.appendChild(taskListItem);
        }
    }

    clearTodos() {
        this.#listTodo.innerHTML = "";
    }
}