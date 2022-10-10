import Wallet from 'App/Models/Wallet';
// import auth from 'App/Services/AuthServices';

class WalletsServices {
  public static async list() {
    const wallet = await Wallet.all()
    return wallet;
  }
  public static async create(user_id, data: { balance: number; }): Promise<Wallet> {
    let wallet = new Wallet();
    wallet.balance = data.balance;
    wallet.userId = user_id;
    await wallet.save();
    return wallet;
  }
  public static async profile(id) {
    const wallet = await Wallet.findOrFail(id);
    return wallet;
  }
  public static async edit(id, user_id, data: { balance: number }): Promise<Wallet> {
    const wallet = await Wallet.findOrFail(id);
    wallet.balance = data.balance;
    wallet.userId = user_id;
    await wallet.save();
    return wallet;
  }
  public static async delete(id) {
    const wallet = await Wallet.findOrFail(id);
    await wallet.delete();
    return wallet;
  }

}
export default WalletsServices;
