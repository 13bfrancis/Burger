import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredient';

const BurgerWrapper = styled.div`
  width: 100%;
  height: 250px;
  margin: auto;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 500px) and (max-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

const Burger = props => {
  let convertedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (convertedIngredients.length === 0) {
    convertedIngredients = 'Please Start Adding Ingredients';
  }
  console.log(convertedIngredients);
  return (
    <BurgerWrapper>
      <BurgerIngredient type="bread-top" />
      {convertedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </BurgerWrapper>
  );
};

export default Burger;
