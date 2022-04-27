const User = require('./../models/user')

class UserServices {
    static create(id,username,name) {
        return new User(id,username,name, "Sin Bio")
    }
    static getInfo() {
        return [1,"ubxidonitroso","Ubaldo","Sin Bio"]
    
    }
}

module.exports = UserServices