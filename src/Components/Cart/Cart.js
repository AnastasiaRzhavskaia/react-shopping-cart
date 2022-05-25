import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div>
            <i className="fas fa-basket-shopping"></i>
            <h3>- TOTAL: ${totalPrice} -</h3>
            <hr />
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/> )}
        </div>
    )
}

export default Cart;