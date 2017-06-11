'use strict'

const db = require('./models')

db.Student.findAll()
.then(students => {
  let promises = []
  students.forEach(student => {
    let obj = {
      name: `${student.first_name} ${student.last_name}`,
      email: student.email,
      height: student.height,
      phone: student.phone,
      gender: student.gender
   }
    promises.push(obj)
  })
  Promise.all(promises)
  .then(datas => {
    db.Student.bulkCreate(datas).then(function () {
      db.Student.destroy({
        where: {
          id : {
            $lt : 5
          }
        }
      }).then(() => {
        console.log(`delete succseed`);
      })
    })
  })
})
