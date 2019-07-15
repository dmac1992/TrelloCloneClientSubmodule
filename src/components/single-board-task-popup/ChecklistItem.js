import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { checkChecklistItem, uncheckChecklistItem } from 'actions/checklistItem';

const Container = styled.li`
    display: flex;
    margin-top: 10px;
    align-items: center;
`;

const Checkbox = styled.div`
    position: relative;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    background-color: #fafbfc;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Tick = styled.span``;

const CheckboxName = styled.span`
    flex-grow: 1;
`;

const DeleteItemIcon = styled.span`
    margin-left: auto;
    cursor: pointer;
`;

class ChecklistItem extends Component {

    renderCheckbox = () => {
        if ( this.props.checklistItem.checked ) {
            return (
                <Checkbox onClick={this.uncheckCheckbox}>
                    <Tick className='icon-check' />
                </Checkbox>
            )
        } else {
            return <Checkbox onClick={this.checkCheckbox}/>
        }
    } 

    //TODO - working but parent component not renrendering ;
    checkCheckbox = () => {
        this.props.checkChecklistItem(this.props.checklistItem.id);
    }

    uncheckCheckbox = () => {
        this.props.uncheckChecklistItem(this.props.checklistItem.id);
    }

    deleteCheckBox = () => {
        this.props.deleteChecklistItem(this.props.checklistItem.id);
    }

    //TODO - the delete item icon needs to be converted to a popup. the popup offers delete functionality and the ability to convert the item to a task.
    render() {
        return (
            <Container>
                {this.renderCheckbox()}
                <CheckboxName>{this.props.checklistItem.name}</CheckboxName>
                <DeleteItemIcon onClick={this.deleteCheckBox} className='icon-times' />
            </Container>
        )
    }
}


export default connect(null, {checkChecklistItem, uncheckChecklistItem})(ChecklistItem);
