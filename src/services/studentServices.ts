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

export default {
  createStudents,
  findStudents
}
