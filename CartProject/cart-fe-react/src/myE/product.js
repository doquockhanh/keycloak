import React from "react";

function ProductC(props) {
    return (
        <div>
            <img src={ require('E:\\Khanh\\kc\\keycloak\\CartProject\\cart-fe-react\\src\\img\\iphone.jpg')} alt="product img"/>
            <p>
                <span>product name: <b>{props.product.name}</b></span><br/>
                <span>price: <b>{props.product.price}$</b></span>
            </p>
            <button onClick={props.onClick}>Add to card</button>
        </div>
    );
}

class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            cart: [],
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/getAllProduct")
            .then(res => res.json())
            .then(
                (list) => {
                    this.setState({
                        productList: list,
                    });
                },)
    }

    addToCard(i){
        const cart = this.state.cart;
        cart.push(this.state.productList[i])
        this.setState({
            cart: cart,
        }, () => alert("*Add to card function is coming soon"))
    }

    renderProduct(i){
        return(
            <ProductC product={this.state.productList[i]} onClick={() => this.addToCard(i)}/>
        )
    }

    render(){
        const products = [];

        for (let i = 0; i < this.state.productList.length; i++) {
            products.push(this.renderProduct(i))
        }

        return (
            <div>
                <div>
                    <h1>List Product</h1>
                </div>

                <div>
                    {products}
                </div>
            </div>
        )
    }
}

export default ProductList