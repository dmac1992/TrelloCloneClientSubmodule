import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.ul`
    background-color: white;
    position: absolute;
    padding: 35px 0;
    width: 370px;
`;

const TeamOption = styled.li``


//TODO IMPLEMENT THIS LATER

export class CreateBoardFloatingChooseTeam extends Component {


    //pass in current team selection
    renderTeamsOptions = () => {
        this.props.teams.map(team => {
            return <TeamOption key={team.id}>{team.name}</TeamOption>
        })
    }

    render() {
        return (
            <Container>
                <TeamOption onClick={this.props.setNoTeam}>No team</TeamOption>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(CreateBoardFloatingChooseTeam)
