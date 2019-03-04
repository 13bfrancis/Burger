import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const NavItemsUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: 500px) {
    flex-flow: column;
  }
`;

const NavigationItems = () => (
  <NavItemsUL>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem>Checkout</NavigationItem>
  </NavItemsUL>
);

export default NavigationItems;
