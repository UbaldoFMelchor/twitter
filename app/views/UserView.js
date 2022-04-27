const UserServices = require('./../services/userServices')

class UserView {
    static createUser(payload) {
        if (payload === null) {
            console.log("Error es Null")
            return {error: "payload no existe"}
        }
        else (typeof payload.username === 'object' && typeof payload.name === 'object' &&
        typeof payload.id === 'object')
        return {error: "Error las propiedades del payload necesitan tener un valor válido"}
    }
}

module.exports = UserView