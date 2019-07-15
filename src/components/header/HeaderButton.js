import React from 'react';
import styled from 'styled-components';

import variables from 'variables';
import 'styles/icons.css';

const Button = styled.a`
    padding: 2.5px;
    font-size: 16px;
    border-radius: 6px;
    height: 30px;
    cursor: pointer;
    background-color: ${variables.primaryColor}
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const ButtonIcon = styled.span`
    top: 1px;
    position: relative;
`;

// if icon exists
const ButtonText = styled.span`
    margin-left: 2.5px;
`;


const HeaderButton = React.memo(function HeaderButton(props) {
    return (
        <Button onClick={props.onClick} >
            {props.icon ? <ButtonIcon className={`${props.icon} headerButton-icon`}></ButtonIcon> : null}
            {props.text ? <ButtonText className="headerButton-text">{props.text}</ButtonText> : null}
        </Button>
    );
});

export default HeaderButton;

