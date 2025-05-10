export class Project {

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