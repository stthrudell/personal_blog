'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    images () {
        return this.hasMany('App/Models/Image')
    }

    categories () {
        return this.belongsToMany('App/Models/Category')
    }
}

module.exports = Post
