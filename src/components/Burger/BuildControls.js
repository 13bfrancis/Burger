import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl';

const BuildControlsWrapper = styled.div`
  width: 100%;
  background: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;
const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  transition: all linear 0.3s;
  &:active {
    transform: scale(1.1);
  }
  &:disabled {
    background: grey;
  }
`;

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <BuildControlsWrapper>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => {
          props.addIngredient(control.type);
        }}
        removed={() => {
          props.removeIngredient(control.type);
        }}
        disabled={props.disabled[control.type]}
      />
    ))}
    <OrderButton onClick={props.ordered} disabled={!props.purchasable}>
      ORDER NOW
    </OrderButton>
  </BuildControlsWrapper>
);

export default BuildControls;
