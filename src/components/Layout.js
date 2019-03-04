import React, { useState } from 'react';
import styled from 'styled-components';
import Toolbar from './Navigation/Toolbar';
import SideDrawer from './Navigation/SideDrawer';

const Main = styled.main`
  margin-top: 72px;
`;

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenedHandler = () => {
    setShowSideDrawer(true);
  };

  return (
    <>
      <Toolbar opened={sideDrawerOpenedHandler} />
      <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
