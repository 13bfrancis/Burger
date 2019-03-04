import React from 'react';
import styled from 'styled-components';

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 25;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Backdrop = props =>
  props.show ? <BackdropWrapper onClick={props.clicked} /> : null;

export default Backdrop;
