import React from 'react'
import styled from 'styled-components';

const LeftPopUpDiv = styled.div`
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 10;
`


function LeftPopUp(props) {
  const { Popup } = props;
  return (
    <LeftPopUpDiv>
      {Popup ? <Popup clearPopup={props.clearPopup}/> : null}
    </LeftPopUpDiv>
  );

}

export default LeftPopUp
