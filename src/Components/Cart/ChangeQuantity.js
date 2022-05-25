const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity) 
    }

    const removeQuantity = () => {
        if (quantity <=1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return (
        <div>
            <button className="quantityButton" onClick={removeQuantity}><i className="fa fa-minus" aria-hidden="true"></i></button>
            <span>{quantity}</span>
            <button className="quantityButton" onClick={addQuantity}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
    )
}

export default ChangeQuantity;