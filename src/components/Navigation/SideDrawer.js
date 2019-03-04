import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';

const SideDrawerWrapper = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100vw)')};
  transition: transform 0.3s ease-out;
  @media (min-width: 500px) {
    display: none;
  }
`;

const SideDrawer = props => (
  <>
    <Backdrop show={props.open} clicked={props.closed} />
    <SideDrawerWrapper open={props.open}>
      <Logo height="11%" margin="32px" />
      <nav>
        <NavigationItems />
      </nav>
    </SideDrawerWrapper>
  </>
);

export default SideDrawer;
