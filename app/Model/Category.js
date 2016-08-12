'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Category.slugify')
    this.addHook('beforeUpdate', 'Category.slugify')
  }

}

module.exports = Category
