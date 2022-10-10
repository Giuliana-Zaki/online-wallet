import User from 'App/Models/User'

class UsersServices {
  public static async list() {
    const user = await User.all()
    return user;
  }
  public static async create(data: { name: string; phone: string; email: string; password: string; }): Promise<User> {
    let user = new User();
    user.name = data.name;
    user.phone = data.phone;
    user.email = data.email;
    user.password = data.password;
    await user.save();
    return user;
  }
  public static async profile(id) {
    const user = await User.findOrFail(id);
    return user;
  }
  public static async edit(id, data: { name: string; phone: string; email: string; password: string; }): Promise<User> {
    const user = await User.findOrFail(id);
    user.name = data.name;
    user.phone = data.phone;
    user.email = data.email;
    user.password = data.password;
    await user.save();
    return user;
  }
  public static async delete(id) {
    const user = await User.findOrFail(id);
    await user.delete();
    return user;
  }


}
export default UsersServices;
