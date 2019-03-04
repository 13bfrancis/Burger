import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 1,
  bacon: 1.5,
  meat: 2
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  };

  addIngredient = type => {
    this.setState(
      {
        ingredients: {
          ...this.state.ingredients,
          [type]: this.state.ingredients[type] + 1
        },
        totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  removeIngredient = type => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    this.setState(
      {
        ingredients: {
          ...this.state.ingredients,
          [type]: this.state.ingredients[type] - 1
        },
        totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  updatePurchaseState = () => {
    const ingredients = {
      ...this.state.ingredients
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    console.log(sum);
    console.log(this.state.purchasable);
    this.setState({ purchasable: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert('You will continue');
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabled={disableInfo}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
