import React, { Component } from "react";
import Aux from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    //can be switched back to a functional component, component did update was for testing purposes
    componentDidUpdate() {
        console.log("orderSummary willUpdate");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
                    {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the followinf ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
            <p>Coninue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Coninue</Button>
        </Aux>
        );
    }
}

export default OrderSummary;
