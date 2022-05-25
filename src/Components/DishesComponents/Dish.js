import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ( {dish} ) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (
        <div>
            <img src={`${dish.img}.jpg`} />
            <h3>{dish.name}</h3>
            <p>${dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="addToCartButton" onClick={()=> {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
    )
}

export default Dish;
