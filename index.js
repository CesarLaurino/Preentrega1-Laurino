
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


class AnimalHoroscopo {
    constructor (animal, elemento, planeta, color, cualidades, puntoCardinal, piedra){
        this.animal = animal;
        this.elemento = elemento;
        this.planeta = planeta;
        this.color = color;
        this.cualidades = cualidades;
        this.puntoCardinal = puntoCardinal;
        this.piedra  = piedra;
    }
}


// const doceSignosHoroscopo = [rata, buey, tigre, conejo, dragon, serpiente, caballo, cabra, mono, gallo, perro, cerdo];

const rata = ["1924", "1936", "1948", "1960", "1972", "1984", "1996", "2008", "2020"];
const buey = ["1925", "1937", "1949", "1961", "1973", "1985", "1997", "2009", "2021"];
const tigre = ["1926", "1938", "1950", "1962", "1974", "1986", "1998", "2010", "2022"];
const conejo = ["1927", "1939", "1951", "1963", "1975", "1987", "1999", "2011", "2023"];
const dragon = ["1928", "1940", "1952", "1964", "1976", "1988", "2000", "2012", "2024"];
const serpiente = ["1929", "1941", "1953", "1965", "1977", "1989", "2001", "2013", "2025"];
const caballo = ["1930", "1942", "1954", "1966", "1978", "1990", "2002", "2014", "2026"];
const cabra = ["1931", "1943", "1955", "1967", "1979", "1991", "2003", "2015", "2027"];
const mono = ["1932", "1944", "1956", "1968", "1980", "1992", "2004", "2016", "2028"];
const gallo = ["1933", "1945", "1957", "1969", "1981", "1993", "2005", "2017", "2029"];
const perro = ["1934", "1946", "1958", "1970", "1982", "1994", "2006", "2018", "2030"];
const cerdo = ["1935", "1947", "1959", "1971", "1983", "1995", "2007", "2019", "2031"];

class animalHoroscopo {
    constructor (animal, elemento, planeta, color, cualidades, puntoCardinal, piedra){
        this.animal = animal;
        this.elemento = elemento;
        this.planeta = planeta;
        this.color = color;
        this.cualidades = cualidades;
        this.puntoCardinal = puntoCardinal;
        this.piedra  = piedra;
    }
}



// function horoscopo (){

//     const masInfo = prompt ("Desea obtener mas información?")

//     if (masInfo === "si"){

//         const fecha = prompt("Por favor indique su año de nacimiento");

//         if (fecha === rata){

//             console.log("Los nacidos bajo el signo de la Rata son persona sabias a las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios. Buenas trabajadoras, ahorradores y buenos administradores de su economía.");


            
//             tablaHoroscopo = new tablaHoroscopo ( "Rata", "Aire", "Mercurio", "Negro", "Intuición y Sencibilidad", "El Norte","Zafiro")
            
//             console.table (tablaHoroscopo)
//         }
//         else if (fecha === buey){

//             console.log ("Usted es Buey en el Horoscopo Chino")
//             console.log("Los bueyes son animales pacientes y tranquilos, que irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan.");

            
//             AnimalHoroscopo = new AnimalHoroscopo ( "Buey", "Agua", "Mercurio", "Negro", "Comunicación", "El Norte","Topacio Dorado")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === tigre){

//             console.log ("Usted es Tigre en el Horoscopo Chino")
//             console.log("Las personas de este signo son muy pasionales y llenas de energía. No pasan desapercibidas, son aventureros, independientes, ingeniosos, impulsivos y les gusta la diversión. Son amigos para toda la vida, aunque les gusta ser el líder del grupo. En el mundo de las relaciones de pareja se muestran el más fuerte, sexy y seductor, aunque de comportamiento excesivo.");
            
//             AnimalHoroscopo = new AnimalHoroscopo ( "Tigre", "Madera", "Jupiter", "Verde", "Creatividad", "El Este","Esmeralda")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === conejo){

//             console.log ("Usted es Conejo en el Horoscopo Chino")
//             console.log("Los que nacen en el Año del Conejo reúnen extraordinarias cualidades humanas: son prudentes, inteligentes, afables, discretos, previsores, atentos y benevolentes. Por eso, el signo del conejo es ampliamente aceptado por la gente. De carácter moderado e indulgente, amante de la paz y la concordia, el conejo odia la guerra y la violencia. Le gusta la vida tranquila, la ternura y la armonía.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Conejo", "Madera", "Jupiter", "Verde", "Consolidación", "El Este","Cuarzo Rosa")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === dragon){

//             console.log ("Usted es Dragon en el Horoscopo Chino")

//             console.log("Símbolo del Emperador en China, el dragón es imaginativo, magnánimo, emprendedor, afortunado y poderoso. Está lleno de fuerza y vitalidad. Es un verdadero acumulador de energía y si le enojas, se enfurecerá de tal manera que perderá los estribos. Será difícil calmarle, pues no cree ni a nadie ni en nadie. Suelen dar buenos consejos y son afortunados tanto en el dinero como en el amor. Son muy sentimentales y se enamoran locamente.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Dragon", "Madera", "Jupiter", "Verde", "Crecimiento", "El Este","Onix")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === serpiente){

//             console.log ("Usted es Serpiente en el Horoscopo Chino")

//             console.log("Las personas Serpientes son astutas, saben lo que quieren y cómo conseguirlo. Su conversación es elegante y fluida. Son intensos y prudentes a la vez. Son celosas y posesivas con su familia pero leales. Les gusta mimar a sus amigos y esperan de ellos una actitud recíproca. Si se sienten desdeñados o fracasan en sus tentativas, pueden estar enfadados durante horas, aunque son buenas para mantener la calma y parecer tranquilas en situaciones difíciles.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Serpiente", "Fuego", "Marte", "Rojo", "Inteligencia", "El Sur","Ambar")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === caballo){

//             console.log ("Usted es Caballo en el Horoscopo Chino")

//             console.log("Populares, optimistas, llenos de alegría, aventureros, elocuentes, impacientes, emprendedores, entusiastas con la vida, grandes amantes y amigos. Su gran pasión es el dinero y los viajes. Les gusta conocer gente nueva, distintas culturas, hablar idiomas y son el alma de las fiestas. Su atractivo físico y su belleza hace que les sea fácil encontrar el amor: trampa en la que caen sin remedio.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Caballo", "Fuego", "Marte", "Rojo", "Alegria", "El Sur","Granate")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === cabra){

//             console.log ("Usted es Cabra en el Horoscopo Chino")

//             console.log("La cabra es creativa, artística, positiva, elegante, femenina, afable, compasiva, llorona, sensible, soñadora, orgullosa y triste. No persiguen la riqueza material y prefieren vivir de sus ensoñaciones. Aman la familia, los niños, el hogar y estar en contacto con la naturaleza. Son muy trabajadoras, aunque no les gusta la presión ni de una fecha límite, ni de un jefe.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Cabra", "Fuego", "Marte", "Rojo", "Pasión", "El Sur","Cuarzo Negro")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === mono){

//             console.log ("Usted es Mono en el Horoscopo Chino")

//             console.log("Animal más parecido al ser humano, es ingenioso, divertido, simpático, de mente rápida y despierta, comprador, persuasivo, sociable, capaces de resolver cualquier problema por difícil que sea con soltura. Sus relaciones amorosas y con los amigos suelen ser conflictivas, pues no soporta que no lo valoren. Gozan de buena salud, aunque sus excesos en las fiestas, alcohol y drogas podrían pasarle factura.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Mono", "Tierra", "Saturno", "Amarillo", "Encanto", "El Centro","Obsidiana")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === gallo){

//             console.log ("Usted es Gallo en el Horoscopo Chino")

//             console.log("Atractivo y seductor, con talento y apreciado. Son meticulosos, eficientes, ordenados, buenos conversadores, observadores, egoístas, usureros, pragmáticos y muy familiares. En el amor son románticos, obstinados y luchan por el control de su pareja. Suelen destacar como relaciones públicas o como artistas. No prestan demasiada atención a su salud.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Gallo", "Metal", "Venus", "Blanco", "Fuerte", "El Oeste","Oro y Plata")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === perro){

//             console.log ("Usted es Perro en el Horoscopo Chino")

//             console.log("El perro es un ser dedicado al trabajo, honesto, confiable, diligente, con un gran sentido de la justicia y la lealtad. Cautiva a todos con su personalidad excitante, su buen humor y su gran capacidad para escuchar los problemas de los demás y dar buenos consejos. En el amor son fieles y leales, aunque muy celoso cuando su pareja no está en casa. Los nervios son su mayor problema de salud.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Perro", "Metal", "Venus", "Blanco", "Confiable", "El Oeste","Cuarzo Negro")
            
//             console.table (AnimalHoroscopo)
//         }
//         else if (fecha === cerdo){

//             console.log ("Usted es Cerdo en el Horoscopo Chino")

//             console.log ("Es un animal sincero, honesto, confiado, educado, cariñoso, servicial, valiente, decidido, con gran fuerza de voluntad, sin grandes pretensiones ni vanidad, con los pies en la tierra. Son muy agradables y tienen gusto y modales impecables. En el amor son sensuales, apasionado y pacientes, pero hasta un punto. Son muy trabajadores, aunque la falta de atracción por el deporte y la apatía harán que su físico se resienta y engorde en exceso.");

//             AnimalHoroscopo = new AnimalHoroscopo ( "Cerdo", "Agua", "Mercurio", "Negro", "Sensibilidad", "El Norte","Amatista")

//             console.table (AnimalHoroscopo)
//         }
//         else  (console.log("N° de año incorrecto"));

//     }
//     else (alert("Muchas gracias por elegirnos"))
// }

// horoscopo();








