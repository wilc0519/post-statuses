import express from 'express'
import { sequelize } from './src/models/index'
import { router } from './src/controller/studentController/studentController'
export const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(PORT, async () => {
  console.log('The app has started in http://localhost:' + PORT)
  await sequelize.authenticate()
})
