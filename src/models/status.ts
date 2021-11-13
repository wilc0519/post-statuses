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

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAta',
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
  StudentId:number

  @BelongsTo(() => Student)
  student: Student

  @CreatedAt
  createdAt:Date

  @UpdatedAt
  updatedAt:Date

  @DeletedAt
  deletedAt:Date
}
