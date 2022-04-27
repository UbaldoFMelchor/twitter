const UserServices = require('./../../app/services/userServices')

describe("Test Unit for UserServices", () => {

    test("1) Create a new user using the UserServices", () => {
        const user = UserServices.create(1,"ubxidonitroso","Ubaldo")
        expect(user.username).toBe("ubxidonitroso")
        expect(user.name).toBe("Ubaldo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})