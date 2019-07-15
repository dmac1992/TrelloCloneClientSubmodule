import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import variables from 'variables';

import { changeHeaderSearchInput } from 'actions/header'


const HeaderSearchContainer = styled.div`
    padding-right: 10px;
    position: relative;
`;

const HeaderSearchInput = styled.input`
    height: 30px;
    border-radius: 6px;
    background-color: ${variables.primaryColor}
    transition: width .25s;
    width: 200px;
    &:focus {
        width: 300px;
        background-color: white;
    }
    ~ {
        cursor pointer;
    }
`;

const HeaderSearchInputIcon = styled.span`
    position: absolute;
    right: 15px;
    top: 7px;
    color: white;
`;

const HeaderSearchSendIcon = styled.span`
    position: absolute; 
    right: 35px;
    top: 7px;
`;

const HeaderSearchCloseIcon = styled.span`
    position: absolute;
    right: 15px;
    top: 7px;
`;


class HeaderSearch extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleChange = (e) => {
        this.props.changeHeaderSearchInput(e.target.value);
    }

    renderIcons() {
        if (this.state.open) {
            return (
                <React.Fragment>
                    <HeaderSearchSendIcon className="header-search-send-icon icon-page-export" ></HeaderSearchSendIcon>
                    <HeaderSearchCloseIcon className="header-search-close-icon icon-times"></HeaderSearchCloseIcon>
                </React.Fragment>
            );
        } else {
            return (
                <HeaderSearchInputIcon className="header-search-search-icon icon-search"></HeaderSearchInputIcon>
                
            )
        }
    }

    focusHandler = () => {
        this.setState({open: true});
    }   

    blurHandler = () => {
        this.setState({open: false});
        this.props.changeHeaderSearchInput("");
    }

    render() {
        return (

            <HeaderSearchContainer>
                <HeaderSearchInput
                    className="header-search-input" 
                    type="text" 
                    value={this.props.value}
                    onChange={this.handleChange}
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                    ></HeaderSearchInput>
                {this.renderIcons()}
            </HeaderSearchContainer>

         
        )
    }
}

function mapStateToProps({header}) {
    return { value: header.headerSearchInput }
}


export default connect(mapStateToProps, { changeHeaderSearchInput })(HeaderSearch);