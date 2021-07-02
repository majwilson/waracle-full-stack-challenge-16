import React from 'react';

import { YumIndicator } from './YumIndicator';

export class CakeForm extends React.Component {
  render() {
    return (
      <form
        className="CakeForm">
        <div
          className="panel name">
          <label>
            Name
          </label>

          <input
            type="text"
            defaultValue={ this.props.cake.name }
            readOnly={ !this.props.editable }
            placeholder="The name of the cake"
          />
        </div>
        <div
          className="panel yumFactor">
          <label>
            Yum factor
          </label>
          { false &&
            <YumIndicator yumFactor={ this.props.cake.yumFactor } />
          }
          <input
            type="text"
            defaultValue={ this.props.cake.yumFactor }
            readOnly={ !this.props.editable }
            placeholder="Yum (2) or Yuk (-2)"
          />
        </div>
        { false &&
          <div
            className="imageWrapper">
            <img
              className="image"
              src={ this.props.cake.imageUrl }
            />
          </div>
        }
        <div
          className="panel url">
          <label>
            Image url
          </label>
          <input
            type="panel text"
            defaultValue={ this.props.cake.imageUrl }
            readOnly={ !this.props.editable }
            placeholder="The Url of the cake image"
          />
        </div>
        <div
          className="panel comment">
          <label>
            Comment
          </label>
          <input
            type="text"
            defaultValue={ this.props.cake.comment }
            readOnly={ !this.props.editable }
            placeholder="Your comment about the cake"
          />
        </div>
        <div
          className="buttons">
          <div className="iconButton" onClick={ () => this.props.onCancelEdit( this.props.cake.name ) }>
            ❌ Cancel
          </div>
          <div className="iconButton" onClick={ () => this.props.onSaveEdit( this.props.cake.name ) }>
            ✅ Save
          </div>
        </div>
      </form>
    );
  }
}
