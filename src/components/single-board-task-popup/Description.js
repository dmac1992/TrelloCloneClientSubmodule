import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import variables from 'variables';
import { updateTaskDescription } from 'actions/tasks';


const Container = styled.div`
    position: relative;
`;

const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`

const Header = styled.div`
    margin-bottom: 5px;
`;

const Title = styled.h3`
    display: inline-block;
    margin-right: 5px;
    font-size: ${variables.taskPopupSectionHeaderFontSize};
`;


const DescriptionTextarea = styled.textarea`
    font-family: ${variables.primaryFont};
    background: white;
    width: 100%;
    border: none;
    padding: 5px;
    :focus {
        background: white;
    }
`

const DescriptionParagraph = styled.p`
    padding: 5px;
`;


const EditButton = styled.button`
    background-color: rgba(9,30,66,.08);
    color:  #172b4d;
    border: none;
    padding: 10px;
    border-radius: 4px;
`;

const FocusedTextAreaSection = styled.div`
    display: flex;
    align-items: center;
`;

const SaveButton = styled.button`
    background-color: ${variables.greenButtonColor};
    margin-right: 5px;
    padding: 7px 10px;
    color: white;
    border-radius: 3px;
    :hover {
        background-color: ${variables.greenButtonHoverColor}
    }
`;

const CloseEditIcon = styled.span`
    cursor: pointer;
    positon: relative;
    top: 13px;px;
`;

class Description extends PureComponent {

    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
        this.paragraphRef = React.createRef();
    }

    state = {
        DescriptionFormShowing: false,
        description: this.props.description,
    }
  

    showDescriptionForm = () => { 
        this.setState({DescriptionFormShowing: true}, () => this.textareaRef.current.focus()) 
    };

    hideDescriptionForm = () => { 
        this.setState({DescriptionFormShowing: false}, () => {
            this.props.updateTaskDescription(this.state.description, this.props.taskID);
        })
     };

    textareaChangeHandler = (e) => this.setState({description: e.target.value}) 

    renderParagraphContent = () => {
        return this.state.description
            ? this.state.description
            : 'Enter a description for task here'
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Description</Title>
                    {!this.state.DescriptionFormShowing ? <EditButton onClick={this.showDescriptionForm}>Edit</EditButton> : null}
                    <SectionIcon className='icon-align-left'></SectionIcon>
                </Header>
                {
                    this.state.DescriptionFormShowing ? (
                        <>
                            <DescriptionTextarea ref={this.textareaRef} onFocus={this.textareaFocused} onChange={this.textareaChangeHandler} onBlur={this.hideDescriptionForm} value={this.state.description}>
                            </DescriptionTextarea>
                            <FocusedTextAreaSection>
                                <SaveButton >Save</SaveButton>
                                <CloseEditIcon className='icon-times' onClick={this.hideDescriptionForm}/>
                            </FocusedTextAreaSection>
                        </>
                    ) : (
                        <DescriptionParagraph ref={this.paragraphRef} onClick={this.showDescriptionForm}>{this.renderParagraphContent()}</DescriptionParagraph>
                    )
                }
            </Container>
        )
    }
  
}

export default connect(null, { updateTaskDescription })(Description);
