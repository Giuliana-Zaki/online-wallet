import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersServices from 'App/Services/UsersServices';
import RegisterValidator from "App/Validators/RegisterValidator";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const user = await UsersServices.list();
    response.status(200).json({ user });
  }
  public async store({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(RegisterValidator);
    const user = await UsersServices.create(data);
    response.status(201).json({ user: user });
    await auth.login(user);
  }
  public async show({ response, params }: HttpContextContract) {
    const id = await params.id;
    const user = await UsersServices.profile(id);
    response.status(200).json({ user });
  }
  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.validate(RegisterValidator);
    const id = await params.id;
    const user = await UsersServices.edit(id, data);
    response.status(200).json({ user });
  }
  public async destroy({ response, params }: HttpContextContract) {
    const id = await params.id;
    const user = await UsersServices.delete(id);
    response.status(200).json({ user });

  }
}
