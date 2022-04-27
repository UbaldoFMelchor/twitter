const user = require('./../../app/models/user')

describe("Unit Test for User class", () => {

    Test('Create an Unit User object', () => {    
        //Aquí invocas el código que vas a usar en tu app
        const user = new User(1, "ubxidonitroso", "Ubaldo","Bio","DateCreated","LastUpdate")

        //Aquí validas los resultados de ese código
        //Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("ubxidonitroso")
        expect(user.name).toBe("ubxido")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lasUpdate).toBe("lastUpdate")
    });

})