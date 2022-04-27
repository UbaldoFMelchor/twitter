const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {

    test("Return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/next/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)

    })

})