import React from 'react';
import styled from 'styled-components';

const BuildControlWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
const BuildControlButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  flex: 1;
`;
const BuildControl = props => (
  <BuildControlWrapper>
    <div style={{ width: '75px' }}>{props.label}</div>
    <BuildControlButton onClick={props.removed} disabled={props.disabled}>
      Less
    </BuildControlButton>
    <BuildControlButton onClick={props.added}>More</BuildControlButton>
  </BuildControlWrapper>
);

export default BuildControl;
