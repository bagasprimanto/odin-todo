class Task {

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
        const projectToDelete = this.projects[projectId];

        if (projectToDelete.tasks.length > 0) {
            Object.keys(projectToDelete.tasks).forEach(taskId => delete projectToDelete[taskId]);
        }

        delete projectToDelete.tasks;

        delete this.projects[projectId];
    }

    get tasks() {
        return this.#tasks;
    }

    createTask(projectId, title, description = "", dueDate = null, priority = null) {
        const newTask = new Task(this.#taskIdToAssign, projectId, title, description, dueDate, priority);
        this.#tasks[this.#taskIdToAssign] = newTask;
        this.#incrementTaskIdToAssign();
        this.#addTaskToProject(newTask, projectId);
    }

    #addTaskToProject(task, projectId) {
        this.projects[projectId].addTask(task);
    }

    getTask(taskId) {
        return this.tasks[taskId];
    }

    deleteTask(taskId) {
        const taskProjectId = this.tasks[taskId].projectId;
        delete this.projects[taskProjectId].tasks[taskId];
        delete this.tasks[taskId];
    }

    initializeTodos() {
        // Create initial template project
        this.createProject("Home 🏡");
        const firstProject = this.#projects[0];

        // Create initial todo tasks
        this.createTask(0, "Trim the lawn", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam adipisci harum hic culpa distinctio illum eos. Inventore sed recusandae laborum neque commodi nostrum, alias dolorum atque, eos harum sapiente!", new Date(2025, 1, 11), "High");
        this.createTask(0, "Clean the bathroom", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam adipisci harum hic culpa distinctio illum eos. Inventore sed recusandae laborum neque commodi nostrum, alias dolorum atque, eos harum sapiente!", new Date(2025, 1, 12), "High");
        this.createTask(0, "Buy groceries", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam adipisci harum hic culpa distinctio illum eos. Inventore sed recusandae laborum neque commodi nostrum, alias dolorum atque, eos harum sapiente!", new Date(2025, 1, 11), "High");
    }
}

class DisplayController {

    #listProject
    #listTodo
    #taskManager

    constructor() {
        // Initialize UI elements
        this.#listProject = document.querySelector("ul.list.project");
        this.#listTodo = document.querySelector("ul.list.todo");

        // Initialize EventListeners

        // Initialize objects
        this.#taskManager = new TaskManager();
        this.#taskManager.initializeTodos();
    }



    // Display everything initially
    initializeDisplay() {

    }

    // Display Project
    displayProjects() {

    }

    // Display Todo List for a Project
    displayTodos() {

    }
}