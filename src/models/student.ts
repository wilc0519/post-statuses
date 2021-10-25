import {
  Table,
  Model,
  PrimaryKey,
  Column,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  AutoIncrement

} from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  freezeTableName: true,
  tableName: 'Students'
})
export class Student extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    id: number

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    firstName: string

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    lastName: string

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    email:string

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    dateOfBirth:Date

    @Column({ type: DataType.STRING })
    cellPhone:string

    @CreatedAt
    createdAt:Date

    @UpdatedAt
    updatedAt:Date

    @DeletedAt
    deletedAt:Date
}
