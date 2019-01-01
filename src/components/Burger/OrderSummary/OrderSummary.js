import React from "react";
import Aux from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the followinf ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Coninue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Coninue</Button>
        </Aux>
    );
};

export default orderSummary;
