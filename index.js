const employee = {
  name: 'Jeff',
  streetAddress:'123 Main Street'
}

function updateEmployeeWithKeyAndValue (employee, key ,value){
  const newEmployee ={...newEmployee}
  newEmployee.name = "Sam",
  newEmployee.streetAddress = "11 Broadway"
  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee,key,value){
  newEmployee.streetAddress = "12 Broadway"
  return newEmployee
}

function deleteFromEmployeeByKey(newEmployee, name) {
  const deletedEmployee = {...newEmployee};
  delete deletedEmployee.name;
  return deletedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(newEmployee, name) {
  delete newEmployee.name;
  return newEmployee;
}