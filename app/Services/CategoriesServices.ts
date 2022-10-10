import Category from 'App/Models/Category';


class TypesServices {
  public static async list() {
    const category = await Category.all()
    return category;
  }
  public static async create(data: { name: string; }): Promise<Category> {
    let category = new Category();
    category.name = data.name;
    await category.save();
    return category;
  }
  public static async profile(id) {
    const category = await Category.findOrFail(id);
    return category;
  }
  public static async edit(id, data: { name: string; }): Promise<Category> {
    const category = await Category.findOrFail(id);
    category.name = data.name;
    await category.save();
    return category;
  }
  public static async delete(id) {
    const category = await Category.findOrFail(id);
    await category.delete();
    return category;
  }
}

export default TypesServices;
