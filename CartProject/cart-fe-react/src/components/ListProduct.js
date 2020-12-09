import React from "react";
import Product from "./Product"
import {connect} from "react-redux";
import * as action from "../actions";

class ProductList extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8080/getAllProduct")
            .then(res => res.json())
            .then(
                (list) => {
                    this.props.setProductsApi(list);
                });
    }

    addToCard = (i) => {
        let cart = sessionStorage.getItem("Cart");
        if(cart == null){
            cart = [];
        }
        for (let j = 0; j < cart.length; j++) {
            console.log(cart[i])
        }
        const product = this.props.product.products[i];
        if (cart.indexOf(product) !== -1) {
            this.props.setMessage("You have already added " + product.name + " to your cart !");
        } else {
            cart.push(product.name);
            sessionStorage.setItem("Cart", cart);
            this.props.setMessage("Successfully added " + product.name + " to your cart !");
        }
    };

    renderProduct() {
        const productElements = [];

        for (let i = 0; i < this.props.product.products.length; i++) {
            productElements.push(
                <Product product={this.props.product.products[i]} onClick={() => {this.addToCard(i)}}/>
            )
        }
        return (
            productElements
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>List Product</h1>
                </div>

                <div>
                    {this.renderProduct()}
                </div>
                <br/>
                <div>
                    {this.props.message.message}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.Product,
        message: state.Message,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        setProductsApi: (pl) => {
            dispatch(action.getProducts(pl));
        },

        setMessage: (message) => {
            dispatch(action.setMessage(message))
        },

        clearMessage: () => {
            dispatch(action.clearMessage())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);