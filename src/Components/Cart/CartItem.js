import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return (
            <div className="column">
                <span><b>{dishes.name}</b> Qty: <b>{cartItem.quantity}</b> Price: ${dishes.price*cartItem.quantity} <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}><i className="fa fa-trash" aria-hidden="true"></i></span></span>
            </div>
    )
}

export default CartItem;