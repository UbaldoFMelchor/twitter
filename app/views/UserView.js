const UserServices = require('./../services/userServices')

class UserView {
    static createUser(payload) {
        if (payload === null) {
            console.log("Error es Null")
            return {error: "payload no existe"}
        }
        else if (typeof payload.username === 'string' && typeof payload.name === 'string' &&
        typeof payload.id === 'number') {
            return UserServices.create(payload.id, payload.username, payload.name)
        }
        else {
            return {error: "Error las propiedades del payload necesitan tener un valor válido"}
        }
    }
}

module.exports = UserView