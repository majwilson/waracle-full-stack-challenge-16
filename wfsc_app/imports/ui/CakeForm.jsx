import React from 'react';

import { YumIndicator } from './YumIndicator';

export class CakeForm extends React.Component {
  render() {
    return (
      <form
        className="CakeForm">
        <div
          className="name">
          <input
            type="text"
            value={ this.props.cake.name }
            readOnly={ !this.props.editable }
            placeholder="The name of the cake"
          />
        </div>
        <div
          className="yumFactor">
          <YumIndicator yumFactor={ this.props.cake.yumFactor } />
          <input
            type="text"
            value={ this.props.cake.yumFactor }
            readOnly={ !this.props.editable }
            placeholder="Yum (2) or Yuk (-2)"
          />
        </div>
        <div
          className="imageWrapper">
          <img
            className="image"
            src={ this.props.cake.imageUrl }
          />
        </div>
          <input
            type="text"
            value={ this.props.cake.imageUrl }
            readOnly={ !this.props.editable }
            placeholder="The Url of the cake image"
          />
        <div
          className="comment">
          <input
            type="text"
            value={ this.props.cake.comment }
            readOnly={ !this.props.editable }
            placeholder="Your comment about the cake"
          />
        </div>
      </form>
    );
  }
}
