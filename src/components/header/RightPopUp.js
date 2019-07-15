import React from 'react'
import styled from 'styled-components';



const RightPopUpDiv = styled.div`
  position: absolute;
  right: 0;
  top: 35px;
  z-index: 10;
`

function RightPopUp(props) {

    const { Popup } = props;
    return (
        <RightPopUpDiv>
            {Popup && <Popup clearPopup={props.clearPopup}/>}
        </RightPopUpDiv>
    );

}

export default RightPopUp
