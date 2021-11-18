import { Student } from './student'
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Statuses'
})

export class Status extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id:number

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  descriptionStatus:string

  @ForeignKey(() => Student)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  studentId:number

  @AllowNull(false)
  @Column({ type: DataTypes.ARRAY(DataTypes.STRING) })
  technology: string[]

  @BelongsTo(() => Student)
  student: Student

  @CreatedAt
  createdAt:Date

  @UpdatedAt
  updatedAt:Date

  @DeletedAt
  deletedAt:Date
}
