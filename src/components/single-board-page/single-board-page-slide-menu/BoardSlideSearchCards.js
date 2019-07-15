import React from 'react'
import styled from 'styled-components';

const Container = styled.div``;

const SearchInputContainer = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;
const SearchInput = styled.input`
    padding: 5px;
    width: 100%;
    margin-bottom: 7px;
    box-shadow: inset 0 0 0 2px #dfe1e6;
`;
const SearchInstructions = styled.span``;


const LabelsSection = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const LabelsList = styled.ul``;
const LabelOption = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 6px;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13);

`;
const LabelColor = styled.span`
    height: 40px;
    width: 40px;
    display: block;
    margin-right: 5px;
    border-radius: 3px;
`;
const LabelName = styled.span``;


const UsersSection = styled.ul`
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    padding-top: 10px;
`;
const User = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 6px;
    cursor: pointer;
    :hover  {
        background-color: rgba(9,30,66,.13);
    }
`;
const UserDP = styled.span`
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #dfe1e6;
    border-radius: 50%;
    margin-right: 7px;
`;
const Username = styled.span``;


const FiltersSection = styled.ul`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const Filter = styled.li`
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding-left: 10px;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
`;

const FilterName = styled.span``;
//TODO unused 'FilterCheck' styled component
// const FilterCheck = styled.span``;


const MasterFiltersSection = styled.ul`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;


class BoardSlideSearchCards extends React.Component {

    state = {
            searchInput: '',
            labelColors: [],
    }

    showAllLabels = () => {

    }

    searchInputChangeHandler = (e) => {
        this.setState({searchInput: e.target.value})
    }

    render() {
        return (
            <Container>

                <SearchInputContainer>
                    <SearchInput onChange={this.searchInputChangeHandler} value={this.state.searchInput} />
                    <SearchInstructions>Type to search by term, label, member, or due time.</SearchInstructions>
                </SearchInputContainer>

                <LabelsSection>
                    <LabelsList>
                        <LabelOption>
                            <LabelColor style={{backgroundColor: 'gray'}} />
                            <LabelName>No Labels</LabelName>
                        </LabelOption>
                        <LabelOption>
                            <LabelColor style={{backgroundColor: 'green'}} />
                            <LabelName>Green Label</LabelName>
                        </LabelOption>
                        <LabelOption>
                            <LabelColor style={{backgroundColor: 'yellow'}} />
                            <LabelName>Yellow Label</LabelName>
                        </LabelOption>
                        <LabelOption>
                            <LabelColor style={{backgroundColor: 'orange'}} />
                            <LabelName>Orange Label</LabelName>
                        </LabelOption>
                    </LabelsList>
                </LabelsSection>

                <UsersSection>
                    <User>
                        <UserDP>?</UserDP>
                        <Username>No Members</Username>
                    </User>
                    <User>
                        <UserDP>A</UserDP>
                        <Username>lmao lmao (mccarthyd1)</Username>
                    </User>
                    <User>
                        <UserDP>A</UserDP>
                        <Username>lmao lmao (mccarthyd1)</Username>
                    </User>
                    <User>
                        <UserDP>A</UserDP>
                        <Username>lmao lmao (mccarthyd1)</Username>
                    </User>
                </UsersSection>


                <FiltersSection>
                    <Filter>
                        <FilterName>Due in the next day</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Due in the next week</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Due in the next month</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Overdue</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Has no due date</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Due date marked complete</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Not marked as complete</FilterName>
                    </Filter>
                </FiltersSection>

                <MasterFiltersSection>
                    <Filter>
                        <FilterName>Matches any label and any member</FilterName>
                    </Filter>
                    <Filter>
                        <FilterName>Matches all labels and all members</FilterName>
                    </Filter>
                </MasterFiltersSection>

                <FiltersSection>
                    <Filter>
                        <FilterName>Clear Search</FilterName>
                    </Filter>
                </FiltersSection>
                

            </Container>
        )
    }
    
}

export default BoardSlideSearchCards
