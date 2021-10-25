/* eslint-disable quote-props */
import { Sequelize } from 'sequelize-typescript'
import { Student } from './student'

const env = process.env.NODE_ENV || 'development'
const config = {
  development: {
    username: 'postgres',
    password: 'linawilc',
    database: 'post-statuses',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: '5434',
    operatorsAliases: false
  }
}

const sequelize: Sequelize = new Sequelize({
  ...config[env],
  models: [Student]
})

export { sequelize }
