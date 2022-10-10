import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Wallet from 'App/Models/Wallet'
import Type from 'App/Models/Type'
import Category from 'App/Models/Category'


export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public amount: number

  @column()
  public walletId: number;

  @column()
  public typeId: number;

  @column()
  public categoryId: number;

  @belongsTo(() => Wallet)
  public wallet: BelongsTo<typeof Wallet>

  @belongsTo(() => Type)
  public type: BelongsTo<typeof Type>

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
