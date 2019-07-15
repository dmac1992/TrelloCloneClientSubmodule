import React from 'react'
import styled from 'styled-components'


const Container = styled.div``;
const MadeByContainer = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
    
`;
const MadeByIcon = styled.span`
    margin-right: 10px;
`;
const MadeByText = styled.span``;


const BoardCreatorSection = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
`;
const BoardCreatorLeftSide = styled.div`
    margin-right: 5px;
`;
const BoardCreatorDP = styled.span`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: block;
    line-height: 50px;
    text-align: center;
    background-color: white;
    cursor: pointer;
`
const BoardCreatorRightSide = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
`;
const BoardCreatorFullname = styled.span``;
const BoardCreatorUsername = styled.span``;
const BoardCreatorEditProfile = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

const BoardDescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 5px;
`;
const BoardDescriptionIcon = styled.span`
    margin-right: 10px;
`;
const BoardDescriptionSpan = styled.span``;

const BoardDescriptionTextarea = styled.textarea`
    margin-top: 10px;
    width: 100%;
    background-color: rgba(9,30,66,.08);
    :focus {
        background-color: white;
    }
    padding: 5px;
`;

const BoardDescriptionParagraph = styled.p`
    background-color: rgba(9,30,66,.04);
    cursor: pointer;
    padding: 5px;
    word-break: break-all;
`;

const BoardDescriptionFormBottomPanel = styled.div`
    display: flex;
    align-items: center;
`;
const BoardDescriptionFormSaveButton = styled.button`
    padding: 10px 15px;
    background-color: green;
    margin-right: 5px;
    color: white;
`;
const CloseBoardDescriptionFormIcon = styled.span`
    cursor: pointer;
`;



class BoardSlideAbout extends React.Component {

    state = {
        boardDescription: '',
        boardDescriptionFormActive: false
    }

    updateBoardDescriptionHandler = (e) => {
        this.setState({boardDescription: e.target.value})
    }

    renderBoardDescriptionForm = () => {
        if (this.state.boardDescriptionFormActive) {
            return (
                <>
                    <BoardDescriptionTextarea 
                    value={this.state.boardDescription} 
                    onChange={this.updateBoardDescriptionHandler} 
                    rows='10' 
                    placeholder='Board Description goes here'
                    />
                    <BoardDescriptionFormBottomPanel>
                        <BoardDescriptionFormSaveButton>Save</BoardDescriptionFormSaveButton>
                        <CloseBoardDescriptionFormIcon className='icon-times' onClick={this.closeDescriptionForm}/>
                    </BoardDescriptionFormBottomPanel>
                </>
            )
        } else {
            return (
                <BoardDescriptionParagraph onClick={this.openDescriptionForm}>{this.renderBoardDescription()}</BoardDescriptionParagraph>
            )
        }
    }

    openDescriptionForm = () => {
        this.setState({boardDescriptionFormActive: true})
    }

    closeDescriptionForm = () => {
        this.setState({boardDescriptionFormActive: false})
    }

    renderBoardDescription = () => {
        if (!this.state.boardDescription) {
            return 'Click here to enter a description for your board';
        } else {
            return this.state.boardDescription
        }
    }
    
    render() {
        return (
            <Container>
    
                <MadeByContainer>
                    <MadeByIcon className='icon-user' />
                    <MadeByText>Made By</MadeByText>
                </MadeByContainer>
    
                <BoardCreatorSection>
                    <BoardCreatorLeftSide>
                        <BoardCreatorDP>Z</BoardCreatorDP>
                    </BoardCreatorLeftSide>
                    <BoardCreatorRightSide>
                        <BoardCreatorFullname>lmao lmao</BoardCreatorFullname>
                        <BoardCreatorUsername>@mccarthyd1</BoardCreatorUsername>
                        <BoardCreatorEditProfile>Edit profile info</BoardCreatorEditProfile>
                    </BoardCreatorRightSide>
                </BoardCreatorSection>
    
                <BoardDescriptionContainer>
                    <BoardDescriptionIcon className='icon-align-left' />
                    <BoardDescriptionSpan>Description</BoardDescriptionSpan>
                </BoardDescriptionContainer>
    
                {this.renderBoardDescriptionForm()}
    
            </Container>
        )
    }
    
}

export default BoardSlideAbout
