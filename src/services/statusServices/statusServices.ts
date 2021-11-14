import { Status } from '../../models/status'
import { Student } from '../../models/student'

const createStatus = async (descriptionStatus, studentId) => {
  try {
    const student = await Student.findByPk(studentId)
    if (student) {
      const status = await Status.create({ descriptionStatus, studentId })
      return status
    }
    return 'Student not found'
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  createStatus
}
