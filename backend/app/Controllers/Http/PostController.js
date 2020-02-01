'use strict'

const Post = use('App/Models/Post')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const posts = Post.query()
    .with('images')
    .with('categories')
    .fetch()
    return posts
  }


  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const { categories, ...data } = request.only([
      'title',
      'content',
      'categories'
    ])

    const post = await Post.create({ ...data, user_id: id })

    if (categories && categories.length > 0) {
      await post.categories().attach(categories)
      await post.load('categories')
    }

    return post
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const post = await Post.findOrFail(params.id)

    await post.load('images')

    return post
  }


  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const post = await Post.findOrFail(params.id)

    const { categories, ...data } = request.only([
      'title',
      'content',
      'categories'
    ])

    post.merge(data)

    await post.save()

    if (categories && categories.length > 0) {
      await post.categories().sync(categories)
      await post.load('categories')
    }

    return post
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ auth, params, request, response }) {
    const post = await Post.findOrFail(params.id)

    if (post.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await post.delete()
  }
}

module.exports = PostController
