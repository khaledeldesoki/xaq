const tasks = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: false },
];

const completeTask = (taskId) => {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = true;
  }
  return tasks;
};

export { tasks, completeTask };