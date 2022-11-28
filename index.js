
const nombreUsuario = prompt ("Ingrese su Nombre!!").toLowerCase()

let consonantes = 0

let vocales = 0

const cesar = "cesar";
const carolina = "carolina";


function deletreo (){

    if (nombreUsuario === cesar || nombreUsuario === carolina){

        for ( let i=0; i < nombreUsuario.length; i++ ){

            console.log(nombreUsuario[i])
            
            if (nombreUsuario [i] === "a" || nombreUsuario [i] === "A"){    
            vocales += 1
            }
            else if (nombreUsuario [i] === "e" || nombreUsuario [i] === "E"){   
            vocales += 1
            }
            else if (nombreUsuario [i] === "i" || nombreUsuario [i] === "I"){
                vocales += 1
            }
            else if (nombreUsuario [i] === "o" || nombreUsuario [i] === "O"){
                vocales += 1
            }
            else if (nombreUsuario [i] === "u" || nombreUsuario [i] === "U"){
                vocales += 1
            }
            else {
                consonantes += 1
            }
        }
    console.log ("Tenes " + vocales + " vocales")
    console.log ("Tenes " + consonantes + " consonantes")
    }
}

function significadoNombre(){

    if (nombreUsuario === cesar){
        console.log ("Cesar Significa: Viene del termino Cesareo que significa del imperio o del emperador. De origen latin.")
        console.log ("Características: Es inquieto, seductor y Cuando se propone algo pone su gran energía para conseguirlo. Es dinámico, emprendedor y muy buen amigo")
        console.log ("Amor: Cuando se enamora es leal y comprensivo.")
        console.log ("Personas famosas: César Milstein (Premio Nobel 1984) y César Franck (compositor y organista), entre otras.")
    }
    else if (nombreUsuario === carolina){
        console.log ("Carolina significa: La que es fuerte. De origen germano.")
        console.log ("Características: Es seductora, sociable, creativa y busca siempre alcanzar sus ideales. Es cariñosa con sus seres queridos.")
        console.log ("Amor: Da todo de sí misma a la persona que ama.")
        console.log ("Personas famosas: Carolina, reina de Inglaterra 1683-1737 y Carolina Herrera, diseñadora de modas internacional, entre otras.")
    }
    else (alert ("Por favor ingresa los nombres con los cuales fui programado, los cuales son: cesar y carolina"))
    
}


deletreo ();
significadoNombre();








