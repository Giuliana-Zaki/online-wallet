import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Wallet from 'App/Models/Wallet'
import { column, beforeSave, BaseModel, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'


export default class user extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public phone: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Wallet)
  public wallet: HasOne<typeof Wallet>

  @beforeSave()
  public static async hashPassword(User: user) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
