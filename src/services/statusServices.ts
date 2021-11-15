import { Status } from '../models/status'
import { Student } from '../models/student'
import { NotFoundError } from '../error/customerError'
import 'babel-polyfill'
const createStatus = async (descriptionStatus, studentId) => {
  try {
    const student = await Student.findByPk(studentId)
    if (student) {
      const status = await Status.create({ descriptionStatus, studentId })
      return status
    } else {
      throw new NotFoundError('Student not found')
    }
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
        if (status) {
          return status
        } else {
          throw new NotFoundError('Status not found')
        }
      }
      const statuses = await Status.findAll({
        where: { studentId }
      })
      return statuses
    } else {
      throw new NotFoundError('Student not found')
    }
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
    } else {
      throw new NotFoundError('Status not found')
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

const deleteStatus = async (studentId, statusId) => {
  try {
    const status = await Status.findOne({
      where: {
        studentId,
        id: statusId
      }
    })
    if (status) {
      await status.destroy()
      return 'status deleted'
    } else {
      throw new NotFoundError('Status not found')
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  createStatus,
  findStatus,
  updateStatus,
  deleteStatus
}
