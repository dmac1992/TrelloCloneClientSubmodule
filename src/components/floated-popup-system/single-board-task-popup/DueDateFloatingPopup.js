import React from 'react'
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

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

class DueDate extends React.Component {

    constructor() {
        super();
        this.state = {
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    render() {
        return (
            <Container style={this.props.coords}>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <Title>Change due date</Title>
                <DatePicker
                    shouldCloseOnSelect={false}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    showTimeInput
                />
            </Container>
        )
    }
  
}

export default DueDate
