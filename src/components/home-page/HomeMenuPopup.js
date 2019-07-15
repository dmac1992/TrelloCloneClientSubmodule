import React from 'react'

function HomeMenuPopup(props) {

  const { Popup } = props;

  return (
    <div className="home-menu-popup-container" style={{'zIndex': 1000, 'position' : 'relative'}}>
      {Popup ? <Popup clearPopup={props.clearPopup}/> : null}
    </div>
  );

}

export default HomeMenuPopup
