import studentServices from '../../services/studentServices'
import express from 'express'

export const router = express.Router()

router.post('/students', async (req, res) => {
  const firstName = String(req.body.firstName)
  const lastName = req.body.lastName
  const email = req.body.email
  const cellPhone = req.body.cellPhone
  const dateOfBirth = req.body.dateOfBirth

  try {
    const student = await studentServices.createStudents(firstName, lastName, email, cellPhone, dateOfBirth)
    res.status(201).send(student)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'error' })
  }
})

router.get('/students', async (req, res) => {
  try {
    const emailToFindStudent = req.query.email
    const students = await studentServices.findStudents(emailToFindStudent)
    res.status(200).send(students)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'error' })
  }
})

router.put('/students/:student_id', async (req:any, res:any) => {
  try {
    console.log('------------------------------------')
    const need = req.body
    console.log(need)
    const studentId = req.params.student_id
    const student = await studentServices.updateStudent(need, studentId)
    res.status(200).send(student)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'error' })
  }
})
