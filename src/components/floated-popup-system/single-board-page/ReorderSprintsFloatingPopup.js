import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import  { withRouter } from 'react-router';

//action handler
import  { updateSprints } from 'actions/sprints';


const Container = styled.div`
    padding: 5px;
    width: 304px;
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
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

const ReorderForm = styled.form``;


const PositionSelectInputContainer = styled.div`
    height: 50px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background-color: rgba(9,30,66,.04);
    position: relative;
    margin-bottom: 5px;

`;

const PositionText = styled.span`
    width: 100%;
    font-size: 16px;
`;

const PositionNo = styled.span`
    width: 100%;
    font-size: 20px;
`;

const PositionSelectInput = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    cursor: pointer;
    opacity: 0;
    border: none;
`;

const PositionOption = styled.option`

`;

const MoveButton = styled.button`
    padding: 7px;
    color: white;
    background-color: green;
`;


//TODO - REORDERING SPRINTS FUNCTIONALITY
export class ReorderSprintsFloatingPopup extends Component {

    //key value pairs, sprint id and new position no.
    
    constructor(props) {
        super(props);
        const boardID = this.props.sprints.find(sprint => sprint.id === this.props.sprintID).boardID;
        this.state = {
            currentSelection: 0,
            boardSprints: this.props.sprints
                .filter(sprint => sprint.boardID === boardID)
                .sort((a, b) => a.boardPosition - b.boardPosition )
        }
        this.selectInputRef = React.createRef();
    }

    componentDidMount() {

    }

    renderOptions = () => {
        const {sprintID} = this.props;
        return this.state.boardSprints.map((sprint, index) => {
            return (
                <PositionOption value={index}>{index}{sprint.id === sprintID ? ' (current)' : null}</PositionOption>
            ) 
        })
    }

    //this needs to reorder state array, and then loop through and give index as board order.
    reorderSprints = (e) => {
        e.preventDefault();
        const newSprintPosition = this.state.currentSelection; // new int index position for sprint.
       
        //get sprint and array index.;
        const { sprintID } = this.props;
        let sprintBeingReorderedIndex = 0;
        let sprintBeingReordered = this.state.boardSprints.find((sprint, index) => {
            if ( sprint.id === sprintID ) {
                sprintBeingReorderedIndex = index;
                return true;
            }
        }); 

        //new array object
        const orderedSprints = [ ...this.state.boardSprints ];

        
        //pop item off array.
        orderedSprints.splice(sprintBeingReorderedIndex, 1);

        //then insert with splice
        orderedSprints.splice(newSprintPosition, 0, sprintBeingReordered);

        //set new board positions;
        orderedSprints.forEach((sprint, index) => sprint.boardPosition = index);



        //call action handlers to update batch of sprints
        this.props.updateSprints(orderedSprints);

        this.props.clearFloatingPopup();

    }

    selectChangeHandler = (e) => {
        this.setState({currentSelection: e.target.value});
    }
  
    render() {
        const { coords, clearFloatingPopup } = this.props;
        return (
            <Container style={coords}>
                <Title>Move sprint</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <ReorderForm onSubmit={this.reorderSprints}>
                    <PositionSelectInputContainer>
                        <PositionText>Position</PositionText>
                        <PositionNo>{this.state.currentSelection}</PositionNo>
                        <PositionSelectInput ref={this.selectInputRef} onChange={this.selectChangeHandler}>
                            {this.renderOptions()}
                        </PositionSelectInput>
                    </PositionSelectInputContainer>
                    <MoveButton>Move</MoveButton>
                </ReorderForm>
            </Container>
        )
    }
}


const mapStateToProps = ( state, ownProps ) => {
    return {
        sprints: state.sprints
    }
}

const mapDispatchToProps = {
    updateSprints
}


const ComponentWithRouter = withRouter(ReorderSprintsFloatingPopup);
export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithRouter)
