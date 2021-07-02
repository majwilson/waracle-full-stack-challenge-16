import React from 'react';

export class PopUp extends React.Component {
  render() {
    return (
      this.props.visible &&
        <div className="popUpContainer">
          <div className="popUp">
            { this.props.children }
          </div>
        </div>
    );
  }
}