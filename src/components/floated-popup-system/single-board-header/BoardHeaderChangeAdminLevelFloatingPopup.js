import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 15px 5px 5px 5px;
    width: 304px;
    position: absolute;
    background-color: white;
`;
const Tophalf = styled.div`
    display: flex;
`;
const TopHalfLeft = styled.div`
`;
const TopHalfRight = styled.div`
    flex-grow: 1;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
`;
const CloseIcon = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const DPContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`;

const DP = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #dfe1e6;
    display: block;
    line-height: 50px;
    text-align: center;
`;

const FullName = styled.span``;
const UserName = styled.span`
    margin-top: 3px;
    margin-bottom: 3px;
`;
const EditProfileLink = styled.span``;


const LinksList = styled.ul`
    margin-top: 10px;
`;
const Link = styled.li`
    padding: 5px;
    cursor: pointer;
    :hover {
        color: white;
        background-color: #172b4d
    }
`;

function BoardChangeAdminLevelFloatingPopup(props) {
    return (
        <Container style={props.coords}>
             <CloseIcon className='icon-times' onClick={props.clearFloatingPopup} />
            <Tophalf>
               <TopHalfLeft>
                    <DPContainer>
                        <DP>M</DP>
                    </DPContainer>
               </TopHalfLeft>
               <TopHalfRight>
                   <FullName>Daniel McCarthy</FullName>
                   <UserName>@mccarthyd1</UserName>
                   <EditProfileLink>Edit profile info</EditProfileLink>
               </TopHalfRight>
            </Tophalf>
            <LinksList>
                <Link>Change permissions...</Link>
                <Link>View Member's Board Activity</Link>
            </LinksList>
        </Container>
    )
}

export default BoardChangeAdminLevelFloatingPopup
