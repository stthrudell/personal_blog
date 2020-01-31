'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryPostSchema extends Schema {
  up () {
    this.create('category_post', (table) => {
      table.increments()
      table
        .integer('post_id')
        .unsigned()
        .references('id')
        .inTable('posts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .index('post_id')
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .index('category_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('category_post')
  }
}

module.exports = CategoryPostSchema
