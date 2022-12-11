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
    else  (alert ("Por favor ingresa los nombres con los cuales fui programado, los cuales son: cesar y carolina"))
    
}


deletreo ();
significadoNombre();


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

const signosHoroscopo = [
    {signo:"Rata",
    anios: ["1924", "1936", "1948", "1960", "1972", "1984", "1996", "2008", "2020"],
    descripcion:"Los nacidos bajo el signo de la Rata son persona sabias a las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios. Buenas trabajadoras, ahorradores y buenos administradores de su economía.",
    elemento:"Aire",
    planeta:"Mercurio",
    color:"Negro",
    cualidades:"Intuición y Sencibilidad",
    puntoCardinal:"El Norte",
    piedra:"Zafiro"},
    
    {signo:"Buey",
    anios: ["1925", "1937", "1949", "1961", "1973", "1985", "1997", "2009", "2021"],
    descripcion:"Los bueyes son animales pacientes y tranquilos, que irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan.",
    elemento:"Agua",
    planeta:"Mercurio",
    color:"Negro",
    cualidades:"Comunicacion",
    puntoCardinal:"El Norte",
    piedra:"Topacio Dorado"},
    
    {signo:"Tigre",
    anios: ["1926", "1938", "1950", "1962", "1974", "1986", "1998", "2010", "2022"],
    descripcion:"Las personas de este signo son muy pasionales y llenas de energía. No pasan desapercibidas, son aventureros, independientes, ingeniosos, impulsivos y les gusta la diversión. Son amigos para toda la vida, aunque les gusta ser el líder del grupo. En el mundo de las relaciones de pareja se muestran el más fuerte, sexy y seductor, aunque de comportamiento excesivo.",
    elemento:"Madera",
    planeta:"Jupiter",
    color:"Verde",
    cualidades:"Creatividad",
    puntoCardinal:"El Este",
    piedra:"Esmeralda"},
    
    {signo:"Conejo",
    anios:["1927", "1939", "1951", "1963", "1975", "1987", "1999", "2011", "2023"],
    descripcion:"Los que nacen en el Año del Conejo reúnen extraordinarias cualidades humanas: son prudentes, inteligentes, afables, discretos, previsores, atentos y benevolentes. Por eso, el signo del conejo es ampliamente aceptado por la gente. De carácter moderado e indulgente, amante de la paz y la concordia, el conejo odia la guerra y la violencia. Le gusta la vida tranquila, la ternura y la armonía",
    elemento:"Madera",
    planeta:"Jupiter",
    color:"Verde",
    cualidades:"Consolidacion",
    puntoCardinal:"El Este",
    piedra:"Cuarzo Rosa"},
    
    {signo:"Dragon",
    anios: ["1928", "1940", "1952", "1964", "1976", "1988", "2000", "2012", "2024"],
    descripcion:"Símbolo del Emperador en China, el dragón es imaginativo, magnánimo, emprendedor, afortunado y poderoso. Está lleno de fuerza y vitalidad. Es un verdadero acumulador de energía y si le enojas, se enfurecerá de tal manera que perderá los estribos. Será difícil calmarle, pues no cree ni a nadie ni en nadie. Suelen dar buenos consejos y son afortunados tanto en el dinero como en el amor. Son muy sentimentales y se enamoran locamente.",
    elemento:"Madera",
    planeta:"Jupiter",
    color:"Verde",
    cualidades:"Crecimiento",
    puntoCardinal:"El Este",
    piedra:"Onix"},  
    
    {signo:"Serpiente",
    anios: ["1929", "1941", "1953", "1965", "1977", "1989", "2001", "2013", "2025"],
    descripcion:"Las personas Serpientes son astutas, saben lo que quieren y cómo conseguirlo. Su conversación es elegante y fluida. Son intensos y prudentes a la vez. Son celosas y posesivas con su familia pero leales. Les gusta mimar a sus amigos y esperan de ellos una actitud recíproca. Si se sienten desdeñados o fracasan en sus tentativas, pueden estar enfadados durante horas, aunque son buenas para mantener la calma y parecer tranquilas en situaciones difíciles.",
    elemento:"Fuego",
    planeta:"Marte",
    color:"Rojo",
    cualidades:"Inteligencia",
    puntoCardinal:"El Sur",
    piedra:"Ambar"},
    
    {signo:"Caballo",
    anios: ["1930", "1942", "1954", "1966", "1978", "1990", "2002", "2014", "2026"],
    descripcion:"Populares, optimistas, llenos de alegría, aventureros, elocuentes, impacientes, emprendedores, entusiastas con la vida, grandes amantes y amigos. Su gran pasión es el dinero y los viajes. Les gusta conocer gente nueva, distintas culturas, hablar idiomas y son el alma de las fiestas. Su atractivo físico y su belleza hace que les sea fácil encontrar el amor: trampa en la que caen sin remedio.",
    elemento:"Fuego",
    planeta:"Marte",
    color:"Rojo",
    cualidades:"Alegria",
    puntoCardinal:"El Sur",
    piedra:"Granate"},
    
    {signo:"Cabra",
    anios: ["1931", "1943", "1955", "1967", "1979", "1991", "2003", "2015", "2027"],
    descripcion:"La cabra es creativa, artística, positiva, elegante, femenina, afable, compasiva, llorona, sensible, soñadora, orgullosa y triste. No persiguen la riqueza material y prefieren vivir de sus ensoñaciones. Aman la familia, los niños, el hogar y estar en contacto con la naturaleza. Son muy trabajadoras, aunque no les gusta la presión ni de una fecha límite, ni de un jefe.",
    elemento:"Fuego",
    planeta:"Marte",
    color:"Rojo",
    cualidades:"Pasión",
    puntoCardinal:"El Sur",
    piedra:"Cuarzo Negro"},
    
    {signo:"Mono",
    anios: ["1932", "1944", "1956", "1968", "1980", "1992", "2004", "2016", "2028"],
    descripcion:"Animal más parecido al ser humano, es ingenioso, divertido, simpático, de mente rápida y despierta, comprador, persuasivo, sociable, capaces de resolver cualquier problema por difícil que sea con soltura. Sus relaciones amorosas y con los amigos suelen ser conflictivas, pues no soporta que no lo valoren. Gozan de buena salud, aunque sus excesos en las fiestas, alcohol y drogas podrían pasarle factura.",
    elemento:"Tierra",
    planeta:"Saturno",
    color:"Amarillo",
    cualidades:"Encanto",
    puntoCardinal:"El Centro",
    piedra:"Obsidiana"},
    
    {signo:"Gallo",
    anios: ["1933", "1945", "1957", "1969", "1981", "1993", "2005", "2017", "2029"],
    descripcion:"Atractivo y seductor, con talento y apreciado. Son meticulosos, eficientes, ordenados, buenos conversadores, observadores, egoístas, usureros, pragmáticos y muy familiares. En el amor son románticos, obstinados y luchan por el control de su pareja. Suelen destacar como relaciones públicas o como artistas. No prestan demasiada atención a su salud.",
    elemento:"Metal",
    planeta:"Venus",
    color:"Blanco",
    cualidades:"Fuerte",
    puntoCardinal:"El Oeste",
    piedra:"Oro y Plata"},
    
    {signo:"Perro",
    anios: ["1934", "1946", "1958", "1970", "1982", "1994", "2006", "2018", "2030"],
    descripcion:"El perro es un ser dedicado al trabajo, honesto, confiable, diligente, con un gran sentido de la justicia y la lealtad. Cautiva a todos con su personalidad excitante, su buen humor y su gran capacidad para escuchar los problemas de los demás y dar buenos consejos. En el amor son fieles y leales, aunque muy celoso cuando su pareja no está en casa. Los nervios son su mayor problema de salud.",
    elemento:"Metal",
    planeta:"Venus",
    color:"Blanco",
    cualidades:"Confiable",
    puntoCardinal:"El Oeste",
    piedra:"Cuarzo Negro"},
    
    {signo:"Cerdo",
    anios: ["1935", "1947", "1959", "1971", "1983", "1995", "2007", "2019", "2031"],
    descripcion:"Es un animal sincero, honesto, confiado, educado, cariñoso, servicial, valiente, decidido, con gran fuerza de voluntad, sin grandes pretensiones ni vanidad, con los pies en la tierra. Son muy agradables y tienen gusto y modales impecables. En el amor son sensuales, apasionado y pacientes, pero hasta un punto. Son muy trabajadores, aunque la falta de atracción por el deporte y la apatía harán que su físico se resienta y engorde en exceso.",
    elemento:"Agua",
    planeta:"Mercurio",
    color:"Negro",
    cualidades:"Sencibilidad",
    puntoCardinal:"El Norte",
    piedra:"Amatista"}
]

function horoscopo (){

    const masInfo = prompt ("Desea obtener mas información?").toLowerCase()
    
    if (masInfo === "si"){
    
        const fecha = prompt("agrega tu año de nacimiento");
    
    for (let signo of signosHoroscopo) {
        
            if  (signo.anios.includes(fecha)){

                console.log(signo.descripcion)
                
                animalHoroscopo = new animalHoroscopo (signo.signo,signo.elemento,signo.planeta,signo.color,signo.cualidades,signo.puntoCardinal,signo.piedra)
            
                console.table (animalHoroscopo)

                alert(`Tu Signo del Horoscopo Chino es: ${signo.signo}`)
                }
            
            }
    }
    else alert("Muchas Gracias por su Participación")
}

horoscopo()
