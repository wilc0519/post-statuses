import express from 'express'
import { sequelize } from './src/models/index'
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.listen(PORT, function () {
  console.log('The app has started in http://localhost:' + PORT)
  sequelize.authenticate().then(() => {
    console.log('successful connection')
  }).catch((error:Error) => {
    console.log('connection error', error)
  })
})
