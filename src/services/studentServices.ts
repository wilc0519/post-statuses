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
export default {
  createStudents
}