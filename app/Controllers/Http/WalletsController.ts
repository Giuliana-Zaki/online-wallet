import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import WalletsServices from 'App/Services/WalletsServices';

export default class WalletsController {
  public async index({ response }: HttpContextContract) {
    const wallet = await WalletsServices.list();
    response.status(200).json({ wallet });
  }
  public async store({ auth, request, response }: HttpContextContract) {
    const data = await request.body();
    const userId = auth.use('api').user?.id;
    const wallet = await WalletsServices.create(userId, data);
    response.status(201).json({ wallet });
  }
  public async show({ response, params }: HttpContextContract) {
    const id = await params.id;
    const wallet = await WalletsServices.profile(id);
    response.status(200).json({ wallet });
  }
  public async update({ auth, request, response, params }: HttpContextContract) {
    const data = await request.body();
    const id = await params.id;
    const userId = auth.use('api').user?.id;
    const wallet = await WalletsServices.edit(id, userId, data);
    response.status(200).json({ wallet });
  }
  public async destroy({ response, params }: HttpContextContract) {
    const id = await params.id;
    const wallet = await WalletsServices.delete(id);
    response.status(200).json({ wallet });

  }
}
