import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from "App/Validators/LoginValidator";


export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(LoginValidator)
    const token = await auth.use('api').attempt(data.email, data.password)
    response.status(200).json({ token })
  }
  public async logout({ response, auth }) {
    await auth.logout();
    return response.redirect('/');
  }
}
