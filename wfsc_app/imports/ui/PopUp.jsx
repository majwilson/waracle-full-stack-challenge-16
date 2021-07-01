import React from 'react';

export class PopUp extends React.Component {
  render() {
    return (
      this.props.visible &&
        <div className="popUpContainer">
          <div className="popUp">
            <span className="closeIcon" onClick={ this.props.handleClose }>x</span>
            { this.props.children }
          </div>
        </div>
    );
  }
}