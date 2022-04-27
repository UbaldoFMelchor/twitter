const UserServices = require('./../../app/services/userServices')

describe("Test Unit for UserServices", () => {

    test("1) Create a new user using the UserServices", () => {
        const user = UserServices.create(1,"ubxidonitroso","Ubaldo")
        expect(user.username).toBe("ubxidonitroso")
        expect(user.name).toBe("Ubaldo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2) Get all user data in a list", () => {
        const user = UserServices.create(1,"ubxidonitroso","Ubaldo")
        const userInfoInList = UserServices.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("ubxidonitroso")
        expect(userInfoInList[2]).toBe("Ubaldo")
        expect(userInfoInList[3]).toBe("Sin Bio")
    });

    test("3) Update username", () => {
        const user = UserServices.create(1, "ubxidonitroso", "Ubaldo")
        UserServices.updateUserUsername(user, "ubxido")
        expect(user.username).toBe("ubxido")
    })
})