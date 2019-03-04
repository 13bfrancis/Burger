import React from 'react';
import { DangerButton, SuccessButton } from '../UI/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>
        {igKey}: {props.ingredients[igKey]}
      </span>
    </li>
  ));
  return (
    <>
      <h3>Your Order </h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <DangerButton onClick={props.cancel}>CANCEL</DangerButton>
      <SuccessButton onClick={props.continue}>CONTINUE</SuccessButton>
    </>
  );
};

export default OrderSummary;
