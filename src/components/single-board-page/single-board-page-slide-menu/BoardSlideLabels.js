import React from 'react'
import styled from 'styled-components';

import ChangeLabelFloatingPopup from 'components/floated-popup-system/slide-out-menu/SlideChangeLabelFloatingPopup';
import CreateLabelFloatingPopup from 'components/floated-popup-system/slide-out-menu/SlideCreateLabelFloatingPopup';

const Container = styled.div`
`;
const SearchInput = styled.input`
    margin-bottom: 5px;
    padding: 5px;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    width: 100%;
`;
const ColorsList = styled.ul`
`;
const ColorRow = styled.li`
    height: 30px;
    display: flex;
    margin-bottom: 5px;
    cursor: pointer;
`;
const ColorBar = styled.div`
    height: 100%;
    flex-grow: 1;
    border-radius: 3px;
`;
const EditIcon = styled.span`
    height: 30px
    width: 30px;
    line-height: 30px;
    margin-left: 5px;
    text-align: center;
    :hover {
        background-color: rgba(9,30,66,.25);
    }
`;

const CreateLabelButton = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 3px;
    background-color: rgba(9,30,66,.04);
`

class BoardSlideLabels extends React.Component {

    constructor(props) {
        super(props);
        this.rowOneRef = React.createRef();
        this.createButtonRef = React.createRef();
    }

    state = {
        labelSearchInput: ''
    }

    searchChangeHandler = (e) => {
        this.setState({labelSearchInput: e.target.value})
    }

    changeLabelFloating = (e) => {
        this.props.setFloatingPopup( ChangeLabelFloatingPopup , this.rowOneRef);
    }   

    createLabelFloating = (e) => {
        this.props.setFloatingPopup( CreateLabelFloatingPopup, this.createButtonRef);
    }

    render() {
        return (
            <Container>
                <SearchInput value={this.state.labelSearchInput} onChange={this.searchChangeHandler} placeholder='search labels...' />
                <ColorsList>
                    <ColorRow  onClick={this.changeLabelFloating} ref={this.rowOneRef}>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                    <ColorRow>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                    <ColorRow>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                    <ColorRow>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                    <ColorRow>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                    <ColorRow>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                    <ColorRow>
                        <ColorBar style={{backgroundColor: 'green'}}></ColorBar>
                        <EditIcon className='icon-pencil' />
                    </ColorRow>
                </ColorsList>
                <CreateLabelButton ref={this.createButtonRef} onClick={this.createLabelFloating}>Create a new label</CreateLabelButton>
            </Container>
        )
    }
  
}

export default BoardSlideLabels
