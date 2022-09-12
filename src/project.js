const projectFactory = (name) => {
    this.projectName = name;
    this.tasks = [];
    return {
        get projectName(){
            return projectName;
        },

        get tasks(){
            return tasks;
        },

        set addTask(task){
            tasks.push(task);
        },
    }
}

export default projectFactory