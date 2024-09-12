[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/iMMj8uI_)
# pre-exam1

### Write a function trackAttendance that takes two parameters:

- employees: an array of employee objects, where each object contains name (string) and attendance (array of boolean values, with true representing a day present and false representing a day absent)
  - for example, { name: 'Alice', attendance: [true, true, false, true, true] },

The function should return a new array of employee objects, where each object contains

- name: the employee's name.
- presentDays: the number of days the employee was present.
- absentDays: the number of days the employee was absent.
  - for example, [ { name: 'Alice', presentDays: 4, absentDays: 1 }]

In case an array of employee objects is an empty, undefined or null, throw error message "No Employee Record"
