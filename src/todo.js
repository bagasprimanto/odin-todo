class Task {

    #taskId;
    #title;
    #description;
    #projectId;
    #checklist = false;

    constructor(taskId, title, description, projectId) {
        this.#taskId = taskId;
        this.#title = title;
        this.#description = description;
        this.#projectId = projectId;
    }

    get taskId() {
        return this.#taskId;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }

    get projectId() {
        return this.#projectId;
    }

    set projectId(projectId) {
        this.#projectId = projectId;
    }

    toggleChecklist() {
        this.#checklist = this.#checklist ? false : true;
    }
}

class Project {

    #projectId;
    #title;
    #tasks = {};

    constructor(projectId, title) {
        this.#projectId = projectId;
        this.#title = title;
    }

    get projectId() {
        return this.#projectId;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get tasks() {
        return this.#tasks;
    }

    getTask(taskId) {
        return this.tasks[taskId];
    }

    addTask(task) {
        this.#tasks[task.taskId] = task;
    }
}

class TaskManager {

    #projectIdToAssign = 0;
    #taskIdToAssign = 0;

    #projects = {};
    #tasks = {};

    get projectIdToAssign() {
        return this.#taskIdToAssign;
    }

    #incrementProjectIdToAssign() {
        this.#projectIdToAssign++;
    }

    get taskIdToAssign() {
        return this.#taskIdToAssign;
    }

    #incrementTaskIdToAssign() {
        this.#taskIdToAssign++;
    }

    get projects() {
        return this.#projects;
    }

    getProject(projectId) {
        return this.projects[projectId];
    }

    createProject(title) {
        this.projects[this.#projectIdToAssign] = new Project(this.#projectIdToAssign, title);
        this.#incrementProjectIdToAssign();
    }

    deleteProject(projectId) {
        if (this.projects[projectId].tasks.length > 0) {
            // delete tasks
        }

        delete this.projects[projectId]

    }

    get tasks() {
        return this.#tasks;
    }

    createTask(title, description = "", projectId) {
        const newTask = new Task(this.#taskIdToAssign, title, description, projectId);
        this.#tasks[this.#taskIdToAssign] = newTask;
        this.#incrementTaskIdToAssign();
        this.addTaskToProject(newTask, projectId);
    }

    getTask(taskId) {
        return this.tasks[taskId];
    }

    deleteTask(taskId) {
        const taskProjectId = this.tasks[taskId].projectId;
        delete this.projects[taskProjectId].tasks[taskId];
        delete this.tasks[taskId];
    }

    addTaskToProject(task, projectId) {
        this.projects[projectId].addTask(task);
    }
}