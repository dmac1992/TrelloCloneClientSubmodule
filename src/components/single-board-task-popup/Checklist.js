import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import variables from 'variables';

import { setFloatingPopup } from 'actions/floatingPopups';
import { deleteChecklist } from 'actions/checklist';
import { addChecklistItem, deleteChecklistItem }  from 'actions/checklistItem';

import DeleteChecklistFloatingPopup from 'components/floated-popup-system/single-board-task-popup/DeleteChecklistFloatingPopup';
import ChecklistItem from './ChecklistItem';

const Container = styled.div`
    position: relative;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 20px;
`;

const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`

const Header = styled.div`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;

const Title = styled.h3`
    display: inline-block;
    margin-right: 5px;
    font-size: ${variables.taskPopupSectionHeaderFontSize};
`;

const DeleteButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
    margin-left: auto;
`

const ProgressBarContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`;
const ProgressBarPercentage = styled.span`
    margin-right: 5px;
`;

const ProgressBar = styled.div`
    height: 5px;
    background-color: rgba(9,30,66,.08);
    flex-grow: 1;
`;

const CheckboxUL = styled.ul`
    margin-bottom: 6px;
`;


const ProgressBarFill = styled.div`
    height: 5px;
`;

const AddItemButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
`;


const AddItemTextArea = styled.textarea`
    width: 100%;
    padding: 6px;
`

const AddItemFormBottomPanel = styled.div`
    display: flex;
    align-items: center;
`;

const AddItemFormSubmitButton = styled.button`
    padding: 7px;
    margin-right: 5px;
    background-color: green;
    color: white;
`;

const CloseAddItemForm = styled.span`
    font-size: 20px;
    cursor: pointer;
`;


//TODO - whole component is flawed. should derive everything from the redux store state.
export class Checklist extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            addItemFormInput: '',
            addItemFormOpen: false
        };
        this.progressBarRef = React.createRef();
        this.progressBarFillRef = React.createRef();
        this.deleteButtonRef = React.createRef();
    }

    componentDidMount() {
       this.updateProgressBar();
    }

    //TODO - setState causing extra render here, look for a work around
    componentDidUpdate() {
        this.updateProgressBar();
    }

    openDeleteChecklistFloatingPopup = () => {
        this.props.setFloatingPopup(DeleteChecklistFloatingPopup, this.deleteButtonRef, { deleteChecklist: this.deleteChecklist })
    }

    deleteChecklist = () => {
        this.props.deleteChecklist(this.props.checklist.id);
    }

    addChecklistItem = () => {
        if ( this.state.addItemFormInput ) {
            this.props.addChecklistItem(this.props.checklist.id, this.state.addItemFormInput);
        }   
    }

    renderChecklistItems = () => {
        return this.props.checklistItems.map((checklistItem) => {
            return (
                <ChecklistItem 
                    key={`checklistItem_${checklistItem.checklistID}_${checklistItem.id}`} 
                    checklistItem={checklistItem} 
                    deleteChecklistItem={this.props.deleteChecklistItem}
                    checked={checklistItem.checked}
                />
            )
        })
    }

    //not working because state percentage being set to zero
    getProgressBarWidth = () => {
        //get width of progress bar
        const barWidth = this.progressBarRef.current.getBoundingClientRect().width;
        let fillBarWidth = 0;
        const progressBarPercentage = this.getProgressBarPercentage();

        //protect against divide by zero
        if ( progressBarPercentage ) {
             fillBarWidth = Math.round(barWidth / 100 * progressBarPercentage);
        } 
        //calculate width of this
        return `${fillBarWidth}px`;
    }

    getProgressBarPercentage = () => {
        let numberOfCheckboxes = 0;
        let checkedCount = 0;
        this.props.checklistItems.forEach(checklistItem => {
            numberOfCheckboxes++;
            if (checklistItem.checked)
                checkedCount++;
        })
        return Math.round(checkedCount / numberOfCheckboxes * 100);
    }

    getProgressBarFillColor = () => {
        const progressBarPercentage = this.getProgressBarPercentage();
        let color = '';
        if (progressBarPercentage > 66 ) {
            color = 'green';
        } else if ( progressBarPercentage > 33 ) {
            color = 'orange'
        } else {
            color = 'red'
        }
        return color;
    }
  
    updateProgressBar = () => {
        this.progressBarFillRef.current.style.backgroundColor = this.getProgressBarFillColor();
        this.progressBarFillRef.current.style.width = this.getProgressBarWidth();
    }

    addItemFormChangeHandler = (e) => {
        this.setState({addItemFormInput: e.target.value});
    }

   
    openAddItemForm = () => {this.setState({addItemFormOpen: true})};
    closeAddItemForm = () => { this.setState({addItemFormOpen: false})}


    renderAddItemSection = () => {
        if (this.state.addItemFormOpen) {
            return (
                <>
                    <AddItemTextArea onChange={this.addItemFormChangeHandler} value={this.state.addItemFormInput} rows='5' />
                    <AddItemFormBottomPanel>
                        <AddItemFormSubmitButton onClick={this.addChecklistItem}>Add</AddItemFormSubmitButton>
                        <CloseAddItemForm className='icon-times' onClick={this.closeAddItemForm}/>
                    </AddItemFormBottomPanel>
                </>
            )
        } else {
            return (
                <AddItemButton onClick={this.openAddItemForm}>Add an item</AddItemButton>
            )
        }
    }

    render() {
        const { checklist } = this.props;
        return (
            <Container>
                 <Header>
                    <Title>{checklist.name}</Title>
                    <SectionIcon className='icon-check-square-o'></SectionIcon>
                    <DeleteButton onClick={this.openDeleteChecklistFloatingPopup} ref={this.deleteButtonRef}>Delete</DeleteButton>
                </Header>
                <ProgressBarContainer>
                    <ProgressBarPercentage>{this.getProgressBarPercentage()}%</ProgressBarPercentage>
                    <ProgressBar ref={this.progressBarRef}>
                        <ProgressBarFill ref={this.progressBarFillRef} />
                    </ProgressBar>
                </ProgressBarContainer>
                <CheckboxUL>
                    {this.renderChecklistItems()}
                </CheckboxUL>
                {this.renderAddItemSection()}
            </Container>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        checklistItems: state.checklistItem.filter(checklistItem => checklistItem.checklistID === ownProps.checklist.id),
    }
}

export default connect(mapStateToProps, { setFloatingPopup, deleteChecklist, addChecklistItem, deleteChecklistItem})(Checklist)

