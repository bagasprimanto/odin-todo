export class Task {

    #taskId;
    #title;
    #description;
    #projectId;
    #dueDate;
    #priority;
    #checklist = false;

    constructor(taskId, projectId, title, description, dueDate, priority) {
        this.#taskId = taskId;
        this.#projectId = projectId;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get taskId() {
        return this.#taskId;
    }

    get projectId() {
        return this.#projectId;
    }

    set projectId(projectId) {
        this.#projectId = projectId;
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

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(dueDate) {
        this.#dueDate = dueDate;
    }

    get priority() {
        return this.#priority;
    }

    set priority(priority) {
        this.#priority = priority;
    }

    get checklist() {
        return this.#checklist;
    }

    toggleChecklist() {
        this.#checklist = this.#checklist ? false : true;
    }
}