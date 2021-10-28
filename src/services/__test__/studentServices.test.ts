import studentServices from '../studentServices'
import { Student } from '../../models/student'
import express from 'express'
import { sequelize } from '../../models/index'
const app = express()
app.listen(function () {
  sequelize.authenticate().then(() => {
    console.log('successful connection')
  }).catch((error:Error) => {
    console.log('connection error', error)
  })
})

test('given the information of a student for the first time save in the database obtain student data ', async () => {
  const firstName = 'Carlos'
  const lastName = 'Jara'
  const email = 'carljar@tsab.com'
  const cellPhone = '0936912159'
  const dateOfBirth = new Date()

  await studentServices.createStudents(firstName, lastName, email, cellPhone, dateOfBirth)
  const studentFound = await Student.findOne({
    where: {
      email: email
    }
  })
  expect(studentFound).not.toBeNull()
})
