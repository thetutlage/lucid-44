'use strict'

const Schema = use('Schema')

class CategorySchema extends Schema {

  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('title')
      table.string('slug')
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }

}

module.exports = CategorySchema
