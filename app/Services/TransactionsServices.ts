import Transaction from 'App/Models/Transaction';

class WalletsServices {
  public static async list() {
    const transaction = await Transaction.all()
    return transaction;
  }
  public static async create(data: { amount: number; wallet_id: number; type_id: number; category_id: number; }): Promise<Transaction> {
    let transaction = new Transaction();
    transaction.amount = data.amount;
    transaction.walletId = data.wallet_id;
    transaction.typeId = data.type_id;
    transaction.categoryId = data.category_id;
    await transaction.save();
    return transaction;
  }
  public static async profile(id) {
    const transaction = await Transaction.findOrFail(id);
    return transaction;
  }
  public static async edit(id, data: { amount: number; wallet_id: number; type_id: number; category_id: number; }): Promise<Transaction> {
    const transaction = await Transaction.findOrFail(id);
    transaction.amount = data.amount;
    transaction.walletId = data.wallet_id;
    transaction.typeId = data.type_id;
    transaction.categoryId = data.category_id;
    await transaction.save();
    return transaction;
  }
  public static async delete(id) {
    const transaction = await Transaction.findOrFail(id);
    await transaction.delete();
    return transaction;
  }

}
export default WalletsServices;
