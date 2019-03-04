import React from 'react';
import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Bacon,
  Cheese,
  Salad
} from './BurgerIngredientStyles';
import PropTypes from 'prop-types';

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <BreadBottom />;
      break;
    case 'bread-top':
      ingredient = (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      );
      break;
    case 'meat':
      ingredient = <Meat />;
      break;
    case 'lettuce':
      ingredient = <Salad />;
      break;
    case 'bacon':
      ingredient = <Bacon />;
      break;
    case 'cheese':
      ingredient = <Cheese />;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
