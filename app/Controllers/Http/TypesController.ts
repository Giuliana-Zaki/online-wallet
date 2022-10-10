import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypesServices from 'App/Services/TypesServices';

export default class TypesController {
  public async index({ response }: HttpContextContract) {
    const type = await TypesServices.list();
    response.status(200).json({ type });
  }
  public async store({ request, response }: HttpContextContract) {
    const data = await request.body();
    const type = await TypesServices.create(data);
    response.status(201).json({ type });
  }
  public async show({ response, params }: HttpContextContract) {
    const id = await params.id;
    const type = await TypesServices.profile(id);
    response.status(200).json({ type });
  }
  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.body();
    const id = await params.id;
    const type = await TypesServices.edit(id, data);
    response.status(200).json({ type });
  }
  public async destroy({ response, params }: HttpContextContract) {
    const id = await params.id;
    const type = await TypesServices.delete(id);
    response.status(200).json({ type });

  }
}
