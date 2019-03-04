import React from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 50;
  background: whitesmoke;
  width: 70%;
  box-shadow: 1px 1px 3px black;
  padding: 20px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <ModalWrapper
      style={{
        transform: props.show ? 'translate(0)' : 'translate(-100vw)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </ModalWrapper>
  </>
);

export default Modal;
