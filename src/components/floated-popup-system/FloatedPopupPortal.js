import React from 'react'
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import { floatingPopupPositioningHOC } from './floatingPopupPositioningHOC'
import { setFloatingPopup } from 'actions/floatingPopups';

class FloatedPopupPortal extends React.Component {

    
    clearFloatingPopup = () => {
        this.props.setFloatingPopup(null, null);
    }

    render() {

        let FloatingPopup;
        if (this.props.floatingPopup) {
            FloatingPopup = this.props.floatingPopup.floatingPopup
        } else {
            FloatingPopup = null;
        }
        if (FloatingPopup) {
            FloatingPopup = floatingPopupPositioningHOC(FloatingPopup, this.props.floatingPopup.anchorRef, this.clearFloatingPopup);
          
            return (
                ReactDOM.createPortal(<FloatingPopup  />, document.querySelector('#floating-portal'))
            );
        } else {
            return null;
        }
        
    }
   
}

const mapStateToProps = ({floatingPopup}) => {
    return {
        floatingPopup
    }
}



export default connect(mapStateToProps, { setFloatingPopup })(FloatedPopupPortal);
