import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';



const Container = styled.div`
    text-align: center;
    position: relative;
    margin-bottom: 15px;
    border-bottom: 1px solid gray;
    padding: 15px;
    margin-left: 5px;
    margin-right: 5px;
    .popup-close {
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
`


const PopUpTitle = ({title, clearPopup}) =>  {

    return (
        <Container>
            <span className="popup-title">{title}</span>
            <span className="popup-close icon-times" onClick={clearPopup}></span>
        </Container>
    )
   
}

export default connect(null)(PopUpTitle);