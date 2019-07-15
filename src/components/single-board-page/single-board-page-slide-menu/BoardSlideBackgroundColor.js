import React from 'react'
import styled from 'styled-components';


import colorsImage from 'images/colors.jpg';
import photosImage from 'images/photos.png';



const Container = styled.div``;

const TopSection = styled.div`
    padding-bottom: 5px; 
    border-bottom: 1px solid gray;
    display: flex;
    
`;

const PhotosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 60%;
    margin-right: 3px;
    cursor: pointer;
`;
const ColorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 60%;
    margin-left: 3px;
    cursor: pointer;
`;

const PhotoImage = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${photosImage});
    background-size: cover;
    margin-bottom: 5px;
    :hover {
        opacity: .8;
    }
`;

const ColorsImage = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${colorsImage});
    background-size: cover;
    margin-bottom: 5px;
    :hover {
        opacity: .8;
    }
`;

//TODO unused 'BottomSection' styled component
// const BottomSection = styled.div``;

function BoardSlideBackgroundColor(props) {
    return (
        <Container>
            <TopSection>

                <PhotosContainer>
                    <PhotoImage />
                    <span>Photos</span>
                </PhotosContainer>

                <ColorsContainer onClick={props.renderColorsContent}>
                    <ColorsImage />
                    Colors
                </ColorsContainer>

            </TopSection>
        </Container>
    )
}

export default BoardSlideBackgroundColor
