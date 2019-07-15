import React from 'react';
import styled from 'styled-components';
import { connect} from 'react-redux';
import  { Link } from 'react-router-dom';

//actions
import { setActiveModal } from 'actions/modal';
import { setActiveLeftPopUp } from 'actions/header';
import { starBoard, unstarBoard, removeRecentBoard } from 'actions/users';

import StarredBoardEntry from './StarredBoardEntry';
import RecentBoardEntry from './RecentBoardEntry';
import UnstarredBoardEntry from './UnstarredEntry';

//modals to spawn
import CreateBoardModal from 'components/modals/CreateBoardModal';

const Container = styled.div`
    box-shadow: 5px 10px;
    top: 35px;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
`

const SearchInput = styled.input`
    border: 1px solid gainsboro;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 15px;
`;

const PopupSection = styled.div`
    padding: 5px;
    margin-bottom: 10px;
`
//TODO what is this 'Symbol' styled component
// const Symbol = styled.span`
//     margin-right: 4px;
// `;

const TitleSection = styled.div`
    display: flex;
    align-items: center;
`;

const TitleIcon = styled.span`
    margin-right: 5px;
`

const ToggleIcon = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    padding: 6px;
    border-radius: 3px;
    &:hover {
        background-color: #DCDCDC;
    }
`;

const TextLink = styled.li`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #DCDCDC;
    }
`;

const SearchCreateBoardLink = styled.p`
    padding: 5px;
    text-align: center;
    cursor: pointer;
    :hover {
        background-color: #DCDCDC;
    }
`;

class BoardsPopup extends React.Component {

    state = {
        starredBoardsOpen: false,
        recentBoardsOpen: false, 
        personalBoardsOpen: false,
        searchValue: ""
    }

    handleSearchChange = (e) => {
        this.setState({searchValue: e.target.value})
    }

    createBoardHandler = () => { 
        this.props.setActiveModal(CreateBoardModal);  
        this.props.setActiveLeftPopUp(null);
     }

     toggleStarredPanel = () => { this.setState({starredBoardsOpen: !this.state.starredBoardsOpen})}
     toggleRecentPanel = () => { this.setState({recentBoardsOpen: !this.state.recentBoardsOpen})}
     togglePersonalPanel = () => { this.setState({personalBoardsOpen: !this.state.personalBoardsOpen})}

     renderStarredBoards = () => {
         const { currentUser, boards, unstarBoard } = this.props;
         if ( currentUser.starredBoards.length ) {
             return boards
                .filter(board => currentUser.starredBoards.includes(board.id))
                .map(board => {
                    return (
                        <StarredBoardEntry
                            key={board.id}
                            board={board}
                            unstarBoard={unstarBoard}
                            currentUser={currentUser}
                        />
                    )
                })
         }
     }

     renderRecentBoards = () => {
         const { currentUser, boards, removeRecentBoard, starBoard } = this.props;
         if ( currentUser.recentlyViewedBoards.length ) {
             return boards 
                .filter(board => currentUser.recentlyViewedBoards.includes(board.id) && !currentUser.starredBoards.includes(board.id))
                .map(board => {
                    return (
                        <RecentBoardEntry
                            to={`/b/${board.id}`}
                            key={board.id}
                            board={board}
                            starBoard={starBoard}
                            removeRecentBoard={removeRecentBoard}
                            currentUser={currentUser}
                        />
                    )
                })
         }
     }

     renderPersonalBoards = () => {
         const { currentUser, boards, unstarBoard, starBoard } = this.props;
         return boards
            .filter(board => board.teamID === null)
            .map(board => {
                if (currentUser.starredBoards.includes(board.id)) {
                    return (
                        <StarredBoardEntry
                            key={board.id}
                            board={board}
                            unstarBoard={unstarBoard}
                            currentUser={currentUser}
                        />
                    )
                } else {
                    return (
                        <UnstarredBoardEntry
                            key={board.id}
                            board={board}
                            starBoard={starBoard}
                            currentUser={currentUser}
                        />
                    )
                }
            })
     }

    renderSearchHits = () => {
        const { currentUser } = this.props; 
        let regex = new RegExp(this.state.searchValue)
        return this.props.boards
            .filter(board => regex.test(board.name))
            .map(board => {
                if (currentUser.starredBoards.includes(board.id)) {
                    return (
                        <StarredBoardEntry
                            key={board.id}
                            board={board}
                            unstarBoard={unstarBoard}
                            currentUser={currentUser}
                        />
                    )
                } else {
                    return (
                        <UnstarredBoardEntry
                            key={board.id}
                            board={board}
                            starBoard={starBoard}
                            currentUser={currentUser}
                        />
                    )
                }
            })
    }

     renderSearchResults = () => {
        return (
            <Container>
                <SearchInput onChange={this.handleSearchChange} value={this.state.searchValue}/>
                {this.renderSearchHits()}
                <SearchCreateBoardLink>Create board named {this.state.searchValue}</SearchCreateBoardLink>
            </Container>
        )
     }

     renderNonSearchContent = () => {
        const { starredBoardsOpen, recentBoardsOpen, personalBoardsOpen } = this.state;
        return (
            <Container>
                <SearchInput onChange={this.handleSearchChange} value={this.state.searchValue}/>
                <div>
                    <PopupSection>
                        <TitleSection>
                            <TitleIcon className='icon-star'></TitleIcon>
                            <span>STARRED BOARDS</span>
                            <ToggleIcon onClick={this.toggleStarredPanel}>
                                <span className={starredBoardsOpen ? "icon-minus" : "icon-plus"} ></span>
                            </ToggleIcon>
                        </TitleSection>
                        { starredBoardsOpen ? this.renderStarredBoards() : null }
                    </PopupSection>
                    
                    <PopupSection>
                        <TitleSection>
                            <TitleIcon className='icon-clock-o'></TitleIcon>
                            <span>RECENT BOARDS</span>
                            <ToggleIcon  onClick={this.toggleRecentPanel}>
                                <span className={recentBoardsOpen ? "icon-minus" : "icon-plus"}></span>
                            </ToggleIcon>
                        </TitleSection>
                        { recentBoardsOpen ? this.renderRecentBoards(): null }
                    </PopupSection>

                    <PopupSection>
                        <TitleSection>
                            <TitleIcon className="icon-page-multiple"></TitleIcon>
                            <span>PERSONAL BOARDS</span>
                            <ToggleIcon onClick={this.togglePersonalPanel}>
                                <span className={personalBoardsOpen ? "icon-minus" : "icon-plus"} ></span>
                            </ToggleIcon>
                        </TitleSection>
                        { personalBoardsOpen ? this.renderPersonalBoards() : null }
                    </PopupSection>
                    <ul>
                        <TextLink onClick={this.createBoardHandler}>Create new board...</TextLink>
                        <TextLink>Always keep this menu open</TextLink>
                        <TextLink>See closed boards...</TextLink>
                    </ul>
                </div>
            </Container>
        )
     }



    render() {

        if ( this.state.searchValue.length ) {
            return this.renderSearchResults();
        } else {
            return this.renderNonSearchContent();
        }
        
    }
}

//needs to request the users starred / recent / personal boards. 

//TODO apply last visited 
const mapStateToProps = (state) => {
    return {
        boards: state.boards,
        currentUser: state.users[state.userId]
    }
}

const mapDispatchToProps = {
    setActiveModal,
    setActiveLeftPopUp,
    unstarBoard,
    starBoard,
    removeRecentBoard
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardsPopup);

//all going to have piece of state that says whether they are showing their respective popup