import React from 'react';

import { YumIndicator } from './YumIndicator';

export class CakesListItem extends React.Component {
  render() {
    return (
      <>
        <div
          className="name">
          { this.props.cake.name }
        </div>
        <div
          className="yumFactor">
          <YumIndicator yumFactor={ this.props.cake.yumFactor } />
        </div>
        <div
          className="imageWrapper">
          <img
            className="image"
            src={ this.props.cake.imageUrl }
          />
        </div>
        <div
          className="comment">
          { this.props.cake.comment }
        </div>
      </>
    );
  }
}
