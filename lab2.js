// Clase para validar contraseñas
class ValidadorContrasena {
    constructor(password) {
        this.password = password;
        this.longitudMinima = 8;
        this.regexMayuscula = /[A-Z]/; 
        this.regexNumero = /[0-9]/;    
        this.regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/; 
    }

    //Método para verificar la contraseña
    verificar() {
        let esValida = true; 

        //Se verifica
        if (this.password.length < this.longitudMinima) {
            console.log("Debe tener al menos 8 caracteres.");
            esValida = false;
        }

        if (!this.regexMayuscula.test(this.password)) {
            console.log("Debe contener al menos una letra mayúscula.");
            esValida = false;
        }

        if (!this.regexNumero.test(this.password)) {
            console.log("Debe contener al menos un número.");
            esValida = false;
        }

        if (!this.regexEspecial.test(this.password)) {
            console.log("Debe contener al menos un carácter especial.");
            esValida = false;
        }

        return esValida;
    }
}

//Solicitar la contraseña al usuario
let password = prompt("Ingresa una contraseña:");

//Crear una instancia de ValidadorContrasena
const validador = new ValidadorContrasena(password);

//Verificar si la contraseña es válida
if (validador.verificar()) {
    alert("¡La contraseña es válida!");
} else {
    alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles.");
}
