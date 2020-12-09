import React from "react";

function Product(props) {
    return (
        <div>
            <p>
                <span>product name: <b>{props.product.name}</b></span><br/>
                <span>price: <b>{props.product.price}$</b></span>
            </p>
            <button onClick={props.onClick}>Add to card</button>
        </div>
    );
}

export default Product;