'use strict'

const slug = require('slug')
const Category = exports = module.exports = {}

Category.slugify = function * (next) {
  this.slug = slug( this.title )
  yield next
}
