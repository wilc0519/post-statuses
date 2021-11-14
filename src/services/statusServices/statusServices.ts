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

const findStatus = async (studentId, statusId) => {
  try {
    const student = await Student.findByPk(studentId)
    if (student) {
      if (statusId) {
        const status = await Status.findOne({
          where: {
            id: statusId,
            studentId
          }
        })
        return status
      }
      const statuses = await Status.findAll({
        where: { studentId }
      })
      return statuses
    }
    return 'Student not found'
  } catch (error) {
    console.log(error)
    throw error
  }
}

const updateStatus = async (studentId, statusId, descriptionStatus) => {
  try {
    const status = await Status.findOne({
      where: {
        studentId: studentId,
        id: statusId
      }
    })
    if (status) {
      await status.update({ descriptionStatus })
      return status
    }
    return 'status not found'
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  createStatus,
  findStatus,
  updateStatus
}
