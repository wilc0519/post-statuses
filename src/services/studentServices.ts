import { Student } from '../models/student'
import 'babel-polyfill'

const createStudents = async (firstName, lastName, email, cellPhone, dateOfBirth) => {
  try {
    const student = await Student.create({ firstName, lastName, email, cellPhone, dateOfBirth })
    return student
  } catch (error) {
    console.log(error)
    throw error
  }
}
const findStudents = async (emailToFindStudent) => {
  try {
    if (emailToFindStudent) {
      const student = await Student.findOne({
        where: {
          email: emailToFindStudent
        }
      })
      if (student) {
        return student
      }
      return 'Student not found'
    }
    const students = await Student.findAll()
    return students
  } catch (error) {
    console.log(error)
    throw error
  }
}

const updateStudent = async (need, studentId) => {
  const updates = Object.keys(need)
  const allowedUpdates = ['firstName', 'lastName', 'email', 'dateOfBirth', 'cellPhone']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
    return 'Invalid update'
  }
  try {
    const student = await Student.findByPk(studentId)
    if (student != null) {
      student?.update(need)
      return student
    }
    return 'student not found'
  } catch (error) {
    console.log(error)
    throw error
  }
}

const deleteStudent = async (studentId:number) => {
  try {
    const student:any = await Student.findByPk(studentId)
    if (student) {
      await student.destroy()
      return 'student deleted'
    }
    return 'student not found'
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  createStudents,
  findStudents,
  updateStudent,
  deleteStudent
}
