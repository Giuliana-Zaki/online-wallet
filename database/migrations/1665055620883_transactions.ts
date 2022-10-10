import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('amount').notNullable()
      table.integer('wallet_id').references('wallets.id').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.integer('type_id').references('types.id').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.integer('category_id').references('categories.id').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
