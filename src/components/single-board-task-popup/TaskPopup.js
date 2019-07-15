import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import variables from 'variables';

import { setActiveModal } from 'actions/modal';
import { setFloatingPopup } from 'actions/floatingPopups';



import Header from './Header';
import Description from './Description';
import AddComment from './AddComment';
import SideMenu from './SideMenu';
import Checklist from './Checklist';
import Activity from './Activity';


const Container = styled.div`
    width: 800px;
    background-color: #f4f5f7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    padding: 20px 30px 20px 60px;
    border-radius: 5px;
    font-family: ${variables.primaryFont}
`;

const ColumnsContainer = styled.div`
    display: flex;
`

const LeftHandSide = styled.div`
    flex-basis: 70%;
    height: 100%;
`;
const RightHandSide = styled.div`
    flex-basis: 30%;
    height: 100%;
`;

class TaskPopup extends React.Component {

    clearPopup = () => {
        this.props.setActiveModal(null);
        this.props.setFloatingPopup(null, null);
    }
   
    renderCheckLists = () => {
        return this.props.checklists.map((checklist) => <Checklist key={`checklist_${checklist.id}`} checklist={checklist} />)
    }
   
    render() {
        return (
            <Container className='task-popup-active'>
                <Header clearPopup={this.clearPopup} task={this.props.task} />
                <ColumnsContainer>
                    <LeftHandSide>
                        <Description taskID={this.props.task.ID} description={this.props.task.description} />
                        {this.renderCheckLists()}
                        <AddComment task={this.props.task} userId={this.props.userId}/>
                        <Activity renderTaskComments={this.renderTaskComments}/>
                    </LeftHandSide>
                    <RightHandSide>
                        <SideMenu  currentTask={this.props.task} clearPopup={this.clearPopup} />
                    </RightHandSide>
                </ColumnsContainer>
            </Container>
        );
    }
}

//TODO - remove the date sorting functions back end functionality is implemented.
//SQL command will take care of the sorting

//TODO - Pull in activities associated with task
const mapStateToProps = (state, ownProps) => {
    let taskID = state.currentTaskPopup;
    return {
        task: state.tasks.find((task) => taskID === task.ID),
        checklists: state.checklists.filter((checklist) => taskID === checklist.taskID),
        userId: state.userId
    }
}


export default connect(mapStateToProps, {setActiveModal, setFloatingPopup })(TaskPopup);
