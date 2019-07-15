import { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';

//app level portals . . .
import ModalBackgroundHOC from 'components/modals/ModalBackgroundHOC';
import CreateBoardModal from 'components/modals/CreateBoardModal';
import TaskPopup from 'components/single-board-task-popup/TaskPopup';


class ModalPortal extends Component {


  renderActivePortal = () => {
      
      switch(this.props.activeModal) {
        case CreateBoardModal:
          return ModalBackgroundHOC(CreateBoardModal);
        case TaskPopup:
          return ModalBackgroundHOC(TaskPopup);
        default:
          return null;
      }
  }

  render() {
    const modal = this.renderActivePortal();
    return (
       ReactDOM.createPortal(modal, document.querySelector("#portal"))
    )
  }
}

const mapStateToProps = ({activeModal}) => {
  return {
     activeModal
  };
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPortal)
