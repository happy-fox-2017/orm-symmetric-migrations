'use strict'
const db = require('./models');


//Update Student FullName( First_name + Last_name);

db.Student.findAll()
.then(Students =>{
  Students.forEach(student =>{
    db.Student.update({
      Full_name : `${student.first_name} ${student.last_name}`
    },{
      where : { id : student.id }
    })
  })
})

