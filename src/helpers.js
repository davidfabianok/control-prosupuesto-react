export const reviewBudget = (budget, remaining) => {
  let classColor;

  if (budget / 4 > remaining) {
    classColor = 'alert alert-danger';
  } else if (budget / 2 > remaining) {
    classColor = 'alert alert-warning';
  } else {
    classColor = 'alert alert-success';
  }

  return classColor;
};
