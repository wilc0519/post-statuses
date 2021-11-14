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
