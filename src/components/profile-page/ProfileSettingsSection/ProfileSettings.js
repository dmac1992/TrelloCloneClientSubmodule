import React, { Component } from 'react';
import styled from 'styled-components';


const Section = styled.div``;
const SectionHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(9,45,66,.13);
`;
const ItemsContainer = styled.div`
  padding-left: 15px;
  > div:last-of-type{
    margin-bottom: 0;
  }
`;
const Item = styled.div`
  margin-bottom: 10px;
  > span {
    text-decoration: underline;
  }
  cursor: pointer;
  padding: 10px;
  :hover {
    background-color: rgba(9,45,66,.13);
  }
`;


export class ProfileSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <SectionHeader><span>Account Details</span></SectionHeader>
          <ItemsContainer>
            <Item><span>Change Name, Initials or Bio...</span></Item>
            <Item><span>Change Avatar...</span></Item>
            <Item><span>Change Password...</span></Item>
            <Item><span>Change Email...</span></Item>
            <Item><span>Change Language...</span></Item>
          </ItemsContainer>
        </Section>
      </React.Fragment>
    )
  }
}

export default ProfileSection
