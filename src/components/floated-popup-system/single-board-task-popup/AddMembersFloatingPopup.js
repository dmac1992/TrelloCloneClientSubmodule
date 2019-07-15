import React from 'react'
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

const Input = styled.input`
    display: block;
    width: 100%;
    border: none;
    background-color: #fafbfc;
    color: #172b4d;
    padding: 8px 12px;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    margin-bottom: 10px;
`;
const HitsList = styled.ul`

`;
const Hit = styled.li`
    display: flex;
    align-items: center;
`;
const Icon = styled.span`
    margin-right: 10px;
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;
    display: inline-block;
    background-color: #dfe1e6;
    border-radius: 50%;
`;
const Username = styled.span``;

const NotFound = styled.p`
    padding: 24px 6px;
    background-color: rgba(9,30,66,.08);
    color: #6b778c;
    text-align: center;
`;

class AddMembers extends React.Component {

    state = {
        searchString: ''
    }

    renderSearchResults = () => {
        return (
            <NotFound></NotFound>
        )
    }

    updateSearchState = (e) => {
        this.setState({searchString: e.value})
    }

    componentDidMount() {
     
    }


    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Members</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <Input onChange={this.updateSearchState} value={this.state.searchString}></Input>
                <HitsList>
                    <Hit>
                        <Icon>A</Icon>
                        <Username>Aaron (aaron5212)</Username>
                    </Hit>
                </HitsList>
                {/* <NotFound></NotFound> */}
            </Container>
        )
    }
 
}

export default AddMembers
