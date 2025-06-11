class HomeRenovation {
  constructor(budget) {
    this.budget = budget;
    this.tasks = [];
    this.completedTasks = [];
  }
  
  addTask(description, cost, priority) {
    
    if (cost > this.budget) {
      return `Not enough budget to add '${description}' task.`;
    }
    
    this.tasks.push({description, cost, priority});
    this.budget -= cost;
    
    return `The task '${description}' has been successfully added to the renovation plan.`;
  }
  
  markTaskAsCompleted(description) {
    const tasksLength = this.tasks.length;
    
    for (let i = 0; i < tasksLength; i++) {
      const currentTask = this.tasks[i];
      
      if (currentTask.description === description) {
        this.tasks.splice(i, 1);
        this.completedTasks.push(currentTask);
        
        return `The task '${description}' has been successfully completed.`
      }
    }
    
    throw new Error(`Task '${description}' not found in the renovation plan.`);
  }
  
  getPriorityTasksCount (minimalPriority) {
    if (minimalPriority <= 0) {
      return "The priority cannot be zero or negative.";
    }
    
    const tasksCount = this.tasks.reduce((acc, obj) => {
      if (obj.priority >= minimalPriority) {
        acc++;
      }
      
      return acc;
    }, 0);
    
    if (!tasksCount) {
      return `No tasks found with priority ${minimalPriority} or higher.`;
    }
    
    return `You have ${tasksCount} tasks to prioritize.`;
  }
  
  renovationSummary() {
    const completedTasksCount = this.completedTasks.length;
    const message = [];
    
    if (!completedTasksCount) {
      throw new Error("No tasks have been completed yet!");
    }
    
    message.push(`Budget left $${this.budget}.`);
    message.push(`You have completed ${completedTasksCount} tasks.`);
    message.push("Pending tasks in the renovation plan:");
    
    for (const task of this.tasks) {
      const {description, cost, priority} = task;
      message.push(`${description} - Cost: ${cost}, Priority: ${priority}`);
    }
    
    return message.join("\n");
    
  }
}
