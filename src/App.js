import React, { useState } from 'react';
import TaskList from './components/TaskList';
import PaymentStatus from './components/PaymentStatus';
import { tasks as initialTasks, completeTask } from './services/taskService';
import { checkPaymentEligibility, releasePayment } from './services/paymentService';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isPaid, setIsPaid] = useState(false);

  const handleTaskComplete = (taskId) => {
    const updatedTasks = completeTask(taskId);
    setTasks([...updatedTasks]);

    const isEligible = checkPaymentEligibility(updatedTasks);
    releasePayment(isEligible);
    setIsPaid(isEligible);
  };

  return (
    <div>
      <h1>Stream Payment Salary</h1>
      <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />
      <PaymentStatus isPaid={isPaid} />
    </div>
  );
};

export default App;