import express from 'express'
import statusServices from '../services/statusServices'
import { NotFoundError } from '../error/customerError'
export const router = express.Router()

router.post('/students/:student_id/statuses', async (req, res) => {
  const studentId = req.params.student_id
  const descriptionStatus = req.body.descriptionStatus
  const technology = req.body.technology
  try {
    const status = await statusServices.createStatus(descriptionStatus, studentId, technology)
    res.status(200).send(status)
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send({ error: error.message })
    } else {
      res.status(500).send({ error: 'error' })
    }
  }
})

router.get('/students/:student_id/statuses', async (req, res) => {
  const studentId = req.params.student_id
  const statusId = req.query.id
  try {
    const status = await statusServices.findStatus(studentId, statusId)
    res.status(200).send(status)
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send({ error: error.message })
    } else {
      res.status(500).send({ error: 'error' })
    }
  }
})

router.put('/students/:student_id/statuses/:status_id', async (req, res) => {
  const studentId = req.params.student_id
  const statusId = req.params.status_id
  const descriptionStatus = req.body.descriptionStatus
  try {
    const status = await statusServices.updateStatus(studentId, statusId, descriptionStatus)
    res.status(200).send(status)
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send({ error: error.message })
    } else {
      res.status(500).send({ error: 'error' })
    }
  }
})

router.delete('/students/:student_id/statuses/:status_id', async (req, res) => {
  const studentId = req.params.student_id
  const statusId = req.params.status_id
  try {
    const status = await statusServices.deleteStatus(studentId, statusId)
    res.status(200).send(status)
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).send({ error: error.message })
    } else {
      res.status(500).send({ error: 'error' })
    }
  }
})
