import React from 'react';

const TaskList = ({ tasks, onTaskComplete }) => {
  const handleTaskComplete = (taskId) => {
    onTaskComplete(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleTaskComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;