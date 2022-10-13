const getEmployerRole = (employeeName, employees) => {
  let employeeEntry = employees.filter(employee => employee.name === employeeName);
  return employeeEntry[0].role;
};


module.exports = getEmployerRole;
