'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const Category = use('App/Model/Category')

Route.on('/').render('welcome')

Route.get('/update/:id', function * (request, response) {
  const title = request.input('title')
  const category = yield Category.findBy('id', request.param('id'))
  category.title = title
  yield category.save()
  response.send(category)
})

Route.get('/new', function * (request, response) {
  const title = request.input('title')
  const category = new Category
  category.title = title
  yield category.save()
  response.send(category)
})
