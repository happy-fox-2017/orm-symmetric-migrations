'use strict'

const db = require('./models')

db.Student.findAll()
  .then(students => {
    let fullname = ''
    students.forEach(student => {
      fullname = `${student.first_name} ${student.last_name}`
      db.Student.update({
        name: fullname,
      }, {
        where: {
          last_name: student.last_name
        }
      })
    })
  })