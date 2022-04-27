const User = require('./../models/user')

class UserServices {
    static create(id,username,name) {
        return new User(id,username,name, "Sin Bio")
    }

    static getInfo() {
        return [1,"ubxidonitroso","Ubaldo","Sin Bio"]
    
    }

    static updateUserUsername(user,username) {
        return user.setUsername = username        
    }

    static getAllUsernames ([user1,user2,user3]) {
        return this.getAllUsernames = [user1.username,user2.username,user3.username]
    }

}

module.exports = UserServices