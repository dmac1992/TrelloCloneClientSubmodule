import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
    overflow-y: scroll;
    padding-bottom: 50px;
`;


function ModalBackgroundHOC(WrappedComponent) {
    return (
        <Container>
            <WrappedComponent />
        </Container>
    )
}

export default ModalBackgroundHOC
