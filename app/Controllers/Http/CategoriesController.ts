import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoriesServices from 'App/Services/CategoriesServices';

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const category = await CategoriesServices.list();
    response.status(200).json({ category });
  }
  public async store({ request, response }: HttpContextContract) {
    const data = await request.body();
    const category = await CategoriesServices.create(data);
    response.status(201).json({ category });
  }
  public async show({ response, params }: HttpContextContract) {
    const id = await params.id;
    const category = await CategoriesServices.profile(id);
    response.status(200).json({ category });
  }
  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.body();
    const id = await params.id;
    const category = await CategoriesServices.edit(id, data);
    response.status(200).json({ category });
  }
  public async destroy({ response, params }: HttpContextContract) {
    const id = await params.id;
    const category = await CategoriesServices.delete(id);
    response.status(200).json({ category });

  }
}
