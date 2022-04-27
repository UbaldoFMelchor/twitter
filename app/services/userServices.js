const User = require('./../models/user')

class UserServices {
    static create(id,username,name) {
        return new User(id,username,name, "Sin Bio")
    }

    static getInfo() {
        return [1,"ubxidonitroso","Ubaldo","Sin Bio"]
    
    }

    static updateUserUsername(user,username) {
        user.setUsername = username        
    }

}

module.exports = UserServices