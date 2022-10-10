import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TransactionsServices from 'App/Services/TransactionsServices';
import TransactionValidator from 'App/Validators/TransactionValidator';


export default class TransactionsController {
  public async index({ response }: HttpContextContract) {
    const transaction = await TransactionsServices.list();
    response.status(200).json({ transaction });
  }
  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(TransactionValidator);
    const transaction = await TransactionsServices.create(
      data);
    response.status(201).json({ transaction });
  }
  public async show({ response, params }: HttpContextContract) {
    const id = await params.id;
    const transaction = await TransactionsServices.profile(id);
    response.status(200).json({ transaction });
  }
  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.validate(TransactionValidator);
    const id = await params.id;
    const transaction = await TransactionsServices.edit(id, data);
    response.status(200).json({ transaction });
  }
  public async destroy({ response, params }: HttpContextContract) {
    const id = await params.id;
    const transaction = await TransactionsServices.delete(id);
    response.status(200).json({ transaction });

  }
}
