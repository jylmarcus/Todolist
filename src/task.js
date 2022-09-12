const taskFactory = (data) => {
    this.title = data.title;
    this.desc = data.desc;
    this.dueDate = data.dueDate;
    this.project = data.project;
    this.priority = data.priority;

    return {
        get dueDate(){
            return dueDate;
        },

        get project(){
            return project;
        },

        get priority(){
            return priority;
        },

        set setDueDate(newDate){
            dueDate = newDate;
        },

        set setProject(newProject){
            project = newProject;
        },

        set setPriority(newPriority){
            priority = newPriority;
        }
    }
}

export default taskFactory