import express from 'express'
import { router as studentRouter } from './studentController/studentController'
import { router as statusRouter } from './statusController/statusComtroller'
const router = express.Router()

router.use(studentRouter)
router.use(statusRouter)

export { router }
