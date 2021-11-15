import express from 'express'
import { router as studentRouter } from './studentController'
import { router as statusRouter } from './statusController'
const router = express.Router()

router.use(studentRouter)
router.use(statusRouter)

export { router }
