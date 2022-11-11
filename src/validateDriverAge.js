function validateDriverAge() {
    var scanf = require('scanf');

    console.log("Escribe tu edad: ");
    var age = scanf('%d');
    
    try {
        if(!isNaN(age)) {
            if (age < 18) {
                console.log("Eres muy joven para conducir");
            } else {
                console.log("Aquí tienes las llaves de tu auto... Buen viaje!!!");
            }
        }else {
            throw "error";
        }
        
    } catch (error) {
        console.log("El dato ingresado no es un número");
    }
}

validateDriverAge();