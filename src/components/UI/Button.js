import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;
const SuccessButton = styled(Button)`
  color: #5c9210;
`;
const DangerButton = styled(Button)`
  color: #944317;
`;

export { Button, SuccessButton, DangerButton };
