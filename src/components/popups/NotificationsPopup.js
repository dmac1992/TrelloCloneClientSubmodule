import React from 'react';
import styled from 'styled-components';


import PopUpTitle from "./PopUpTitle";


const Container = styled.div`
    width: 500px;
    box-shadow: 5px 10px;
    top: $header-height;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
`;

const FeedContainer = styled.div`
    height: 300px;
    background-color: blue;
`;

const Link = styled.span`
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;
    display: block;
    text-align: center;
    &:hover {
        background-color: #8D6A9F;
    }
`;

class NotificationsPopup extends React.Component {

    render() {
        return (
            <Container>
                <PopUpTitle title="Notifications" clearPopup={this.props.clearPopup} />
                <FeedContainer />
                <Link>Change notification email frequency</Link>
                <Link>Allow desktop notifications</Link>
            </Container>
        )
    }
}

export default NotificationsPopup;

//all going to have piece of state that says whether they are showing their respective popup