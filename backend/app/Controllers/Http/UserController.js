'use strict'

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["name", "username", "email", "password", "role"])
    if(!data.role) {
      data.role = '2'
    }    
    const user = await User.create(data)

    return user
  }
}

module.exports = UserController