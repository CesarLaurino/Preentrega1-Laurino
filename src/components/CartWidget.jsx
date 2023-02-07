import carrito from "./img/cart3.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-success position-relative">
            <img src={carrito} alt="carrito" width={25} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">11</span>
        </button>
    )
}

export default CartWidget;