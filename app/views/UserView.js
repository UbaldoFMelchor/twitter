const UserServices = require('./../services/userServices')

class UserView {
    static createUser(payload) {
        if (payload === null) {
            console.log("Error es Null")
            return {error: "payload no existe"}
        }
    }
}

module.exports = UserView