import express from 'express'
import statusServices from '../../services/statusServices/statusServices'
export const router = express.Router()

router.post('/students/:student_id/statuses', async (req, res) => {
  const studentId = req.params.student_id
  const descriptionStatus = req.body.descriptionStatus
  try {
    const status = await statusServices.createStatus(descriptionStatus, studentId)
    res.status(200).send(status)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'error' })
  }
})

router.get('/students/:student_id/statuses', async (req, res) => {
  const studentId = req.params.student_id
  const statusId = req.query.id
  try {
    const status = await statusServices.findStatus(studentId, statusId)
    res.status(200).send(status)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'error' })
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
    console.log(error)
    res.status(500).send({ error: 'error' })
  }
})
