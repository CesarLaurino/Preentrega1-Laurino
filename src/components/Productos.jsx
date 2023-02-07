import latanegra from "./img/monster negra.png"
import latablanca from "./img/monster blanca.png"
import latanaranja from "./img/monster naranja.png"
import lataamarilla from "./img/monster amarilla.png"
import latamango from "./img/monster mango.png"
import lataverde from "./img/monster verde.png"
import latavioleta from "./img/monster violeta.png"
import lataazul from "./img/monster azul.png"
import lataturquesa from "./img/monster turquesa.png"
import latarosa from "./img/monster rosa.png"

const Productos = () => {
    return (
        <div className="container-fluid">
            <ul className="productos">
                <li className="latas">
                    <img className="imglatas" src={latanegra} alt="lata negra"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={latablanca} alt="lata blanca"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={latanaranja} alt="lata naranja"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={lataamarilla} alt="lata amarilla"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={latamango} alt="lata mango"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={lataverde} alt="lata verde"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={lataazul} alt="lata azul"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={latavioleta} alt="lata violeta"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={lataturquesa} alt="lata turquesa"/>
                </li>
                <li className="latas">
                    <img className="imglatas" src={latarosa} alt="lata rosa"/>
                </li>
            </ul>
        </div>
    )
}

export default Productos;