import React, { Component } from 'react'
import styled from 'styled-components'

const ColorsList = styled.ul`
    width: 100%;
    display: grid;
    grid-gap: 5px;
    grid-auto-rows: 96px;
    grid-template-columns: 50% 50%;
`;

const Color = styled.li`
    border-radius: 3px;
    cursor: pointer;
    :hover {
        opacity: .7;
    }
`;


export class BoardSlideColors extends Component {
    render() {
        return (
            <ColorsList>
                <Color style={{backgroundColor: 'green'}}/>
                <Color style={{backgroundColor: 'blue'}}/>
                <Color style={{backgroundColor: 'red'}}/>
                <Color style={{backgroundColor: 'aqua'}}/>
                <Color style={{backgroundColor: 'beige'}}/>
                <Color style={{backgroundColor: 'gray'}}/>
                <Color style={{backgroundColor: 'pink'}}/>
                <Color style={{backgroundColor: 'purple'}}/>
                <Color style={{backgroundColor: 'charcoal'}}/>
            </ColorsList>
        )
    }
}

export default BoardSlideColors
