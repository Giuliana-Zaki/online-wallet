/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'AuthController.login');
Route.get('/logout', 'AuthController.logout');
Route.post('/users', 'UsersController.store').as('users.store');


Route.group(() => {
  Route.get('/', 'UsersController.index').as('users.list');
  Route.get('/:id', 'UsersController.show').as('user.profile');
  Route.put('/:id', 'UsersController.update').as('user.update');
  Route.delete('/:id', 'UsersController.destroy').as('users.delete');
}).prefix('/users').middleware('auth');


Route.group(() => {
  Route.get('/', 'WalletsController.index').as('wallets.list');
  Route.get('/:id', 'WalletsController.show').as('wallet.profile');
  Route.post('/', 'WalletsController.store').as('wallets.store');
  Route.put('/:id', 'WalletsController.update').as('wallet.update');
  Route.delete('/:id', 'WalletsController.destroy').as('wallets.delete');
}).prefix('/wallets').middleware('auth');


Route.group(() => {
  Route.get('/', 'TypesController.index').as('types.list');
  Route.get('/:id', 'TypesController.show').as('type.profile');
  Route.post('/', 'TypesController.store').as('types.store');
  Route.put('/:id', 'TypesController.update').as('type.update');
  Route.delete('/:id', 'TypesController.destroy').as('types.delete');
}).prefix('/types').middleware('auth');


Route.group(() => {
  Route.get('/', 'CategoriesController.index').as('categories.list');
  Route.get('/:id', 'CategoriesController.show').as('category.profile');
  Route.post('/', 'CategoriesController.store').as('categories.store');
  Route.put('/:id', 'CategoriesController.update').as('category.update');
  Route.delete('/:id', 'CategoriesController.destroy').as('categories.delete');
}).prefix('/categories').middleware('auth');


Route.group(() => {
  Route.get('/', 'TransactionsController.index').as('transactions.list');
  Route.get('/:id', 'TransactionsController.show').as('transaction.profile');
  Route.post('/', 'TransactionsController.store').as('transactions.store');
  Route.put('/:id', 'TransactionsController.update').as('transaction.update');
  Route.delete('/:id', 'TransactionsController.destroy').as('transactions.delete');
}).prefix('/transactions').middleware('auth');


