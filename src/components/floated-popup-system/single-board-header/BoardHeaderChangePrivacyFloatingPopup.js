import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
padding: 5px;
width: 304px;
position: absolute;
background-color: white;
`;

const Title = styled.div`
height: 32px;
line-height: 32px;
text-align: center;
border-bottom: 1px solid rgba(9,30,66,.13);
padding-bottom: 10px;
margin-bottom: 10px;

`;

const CloseIcon = styled.span`
position: absolute;
top: 10px;
right: 10px;
`;


const PrivacyOptionsList = styled.ul`
    background-color: white;
    
`;

const PrivacyOption = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    :hover {
        background-color: #298fca;
        > * {
            color: white;
        }
        
    }
`;
const PrivacyOptionTopHalf = styled.div`
    margin-bottom: 3px;
`;

const IconPrivate = styled.span`
    margin-right: 5px;
    color: red;
`;

const IconPublic = styled.span`
    margin-right: 5px;
    color: green;
`;
const PrivacyTitle = styled.span``;


const Description = styled.p`
`;



class BoardChangePrivacyFloatingPopup extends React.Component {

  

    render() {

        return (
            <Container style={this.props.coords}>
                <Title>Change Visibility</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup}/>
                <PrivacyOptionsList>
                    <PrivacyOption>
                        <PrivacyOptionTopHalf>
                            <IconPrivate className='icon-lock' />
                            <PrivacyTitle>Private</PrivacyTitle>
                        </PrivacyOptionTopHalf>
                        <Description>Only board members can see and edith this board</Description>
                    </PrivacyOption>
                    <PrivacyOption>
                        <PrivacyOptionTopHalf>
                            <IconPublic className='icon-world' />
                            <PrivacyTitle>Public</PrivacyTitle>
                        </PrivacyOptionTopHalf>
                        <Description>Anyone on internet can see this board. Only board members can edit</Description>
                    </PrivacyOption>
                </PrivacyOptionsList>
               
            </Container>
        )

    }
   
}

export default BoardChangePrivacyFloatingPopup