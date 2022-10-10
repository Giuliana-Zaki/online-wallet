import Type from 'App/Models/Type';


class TypesServices {
  public static async list() {
    const type = await Type.all()
    return type;
  }
  public static async create(data: { name: string; }): Promise<Type> {
    let type = new Type();
    type.name = data.name;
    await type.save();
    return type;
  }
  public static async profile(id) {
    const type = await Type.findOrFail(id);
    return type;
  }
  public static async edit(id, data: { name: string; }): Promise<Type> {
    const type = await Type.findOrFail(id);
    type.name = data.name;
    await type.save();
    return type;
  }
  public static async delete(id) {
    const type = await Type.findOrFail(id);
    await type.delete();
    return type;
  }
}

export default TypesServices;
