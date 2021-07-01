import React from 'react';

import { YumIndicator } from './YumIndicator';

export class CakesListItem extends React.Component {
  render() {
    return (
      <li
        className="CakesListItem">
        <div
          className="imageWrapper">
          <div
            className="image"
            style={ { 'background-image': `url(images${ this.props.cake.imageUrl })` } }
          />
        </div>
        <div
          className="name">
          { this.props.cake.name }
        </div>
        <div
          className="yumIndicator">
          <YumIndicator yumFactor={ this.props.cake.yumFactor } />
        </div>
        <div
          className="comment">
          { this.props.cake.comment }
        </div>
      </li>
    );
  }
}
