import studentServices from '../studentServices'
import { Student } from '../../models/student'
import { app } from '../../../app'
import { sequelize } from '../../models/index'
app.listen(function () {
  sequelize.authenticate().then(() => {
  }).catch((error:Error) => {
    throw error
  })
})

test('Given the information of a student for the first time save in the database obtain student data ', async () => {
  const firstName = 'Carlos'
  const lastName = 'Jara'
  const email = 'carljar@tsc.com'
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

test('Get the existing student registration number in the database. ', async () => {
  const students = await studentServices.findAllStudents()
  expect(students).not.toBeNull()
})
