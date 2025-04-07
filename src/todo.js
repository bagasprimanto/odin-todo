function createTask(project, title, description = "", dueDate, priority = "Low", notes = "", checklist = false) {
    const project = () => project;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getChecklist = () => checklist;

    const toggleChecklist = () => checklist = checklist ? false : true;

    return { getTitle, getDescription, getDueDate, getPriority, getNotes, getChecklist, toggleChecklist };
}

function createProject(title) {
    const tasks = {};

    const getTitle = () => title;
    const getTasks = () => tasks;

    const addTask = (task) => tasks[task.getTitle()] = task;

    return { getTitle, getTasks, addTask };
}