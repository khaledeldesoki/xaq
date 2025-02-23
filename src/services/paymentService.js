const checkPaymentEligibility = (tasks) => {
  return tasks.every(task => task.completed);
};

const releasePayment = (isEligible) => {
  if (isEligible) {
    // Integrate with Superfluid or Sablier to release payment
    console.log('Payment released');
  } else {
    console.log('Payment not released');
  }
};

export { checkPaymentEligibility, releasePayment };