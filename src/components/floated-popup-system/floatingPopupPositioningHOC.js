import React  from 'react'
import { connect } from 'react-redux';
import variables from 'variables';

//actions
import { setFloatingPopup } from 'actions/floatingPopups';
import { setFloatingPopupInplace } from 'actions/floatingPopups';

export function floatingPopupPositioningHOC (Popup, anchorRef, clearFloatingPopup) {

    class WrappedFloatingPopup extends React.Component {

        state = {
            coords: {
                top: 0,
                left: 0
            },
            anchorRef,
        }
    
        componentDidMount() {
            window.addEventListener('resize', this.determineCoords);
            window.addEventListener('scroll', this.determineCoords);
            this.determineCoords();
        }
    
        componentWillUnmount() {
            window.removeEventListener('resize', this.determineCoords);
            window.removeEventListener('scroll', this.determineCoords);
        }
    
        determineCoords = () => {

            const domRect = this.state.anchorRef.current.getBoundingClientRect();
            const {x, y} = domRect;
            const refElementHeight = domRect.height;
        
            //TODO - remove this makeshift solution (font application), probably better to apply fonts in global css file
            this.setState({coords: {
                top: `${y + refElementHeight + window.scrollY}px`,
                left: `${x}px`,
                fontFamily: variables.primaryFont
            }});

        }

        render() {
            return (
                <Popup 
                    coords={this.state.coords} 
                    clearFloatingPopup={clearFloatingPopup} 
                    setFloatingPopup={this.props.setFloatingPopup}
                    setFloatingPopupInplace={this.props.setFloatingPopupInplace} 
                    floatingPopup={this.props.floatingPopup}
                    { ...this.props.floatingPopup.argumentsAsProps }
                />
            )
        }
    }

    const mapStateToProps = ({ floatingPopup }) => {
        return {
            floatingPopup
        }
    }

    return connect(mapStateToProps, {setFloatingPopup, setFloatingPopupInplace})(WrappedFloatingPopup);
    
}


