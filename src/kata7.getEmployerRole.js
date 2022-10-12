const getEmployerRole = (employeeName, employees) => {
  const indexNumber = employees.indexOf(employeeName);
  return employees[indexNumber];

};


module.exports = getEmployerRole;
