/* eslint-disable quote-props */
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import { Student } from './student'

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../config/config.ts'))[env]

const sequelize: Sequelize = new Sequelize({
  ...config,
  models: [Student]
})

export { sequelize }
