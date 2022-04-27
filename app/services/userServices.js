const User = require('./../models/user')

class UserServices {
    static create(id,username,name) {
        return new User(id,username,name, "Sin Bio")
    }
}

module.exports = UserServices