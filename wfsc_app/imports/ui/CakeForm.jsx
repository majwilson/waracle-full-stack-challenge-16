import React from 'react';

import { YumIndicator } from './YumIndicator';

export class CakeForm extends React.Component {
  onChange( event ) {
    this.props.cake[ event.target.name ] = event.target.value;
  }
  onSaveEdit() {
    let new_cake = this.props.cake;
    this.props.onSaveEdit( new_cake )
  }
  onCancelEdit() {
    this.props.onCancelEdit()
  }
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
            name="name"
            defaultValue={ this.props.cake.name }
            readOnly={ !this.props.editable }
            onChange={ this.onChange.bind( this ) }
            placeholder="The name of the cake"
          />
          { this.props.fail_valids.name &&
            <div
              className="failValid">
              { this.props.fail_valids.name }
            </div>
          }

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
            name="yumFactor"
            defaultValue={ this.props.cake.yumFactor }
            readOnly={ !this.props.editable }
            onChange={ this.onChange.bind( this ) }
            placeholder="Yum (2) or Yuk (-2)"
          />
          { this.props.fail_valids.yumFactor &&
            <div
              className="failValid">
              { this.props.fail_valids.yumFactor }
            </div>
          }

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
            type="text"
            name="imageUrl"
            defaultValue={ this.props.cake.imageUrl }
            readOnly={ !this.props.editable }
            onChange={ this.onChange.bind( this ) }
            placeholder="The Url of the cake image"
          />
          { this.props.fail_valids.imageUrl &&
            <div
              className="failValid">
              { this.props.fail_valids.imageUrl }
            </div>
          }

        </div>
        <div
          className="panel comment">
          <label>
            Comment
          </label>
          <input
            type="text"
            name="comment"
            defaultValue={ this.props.cake.comment }
            readOnly={ !this.props.editable }
            onChange={ this.onChange.bind( this ) }
            placeholder="Your comment about the cake"
          />
          { this.props.fail_valids.comment &&
            <div
              className="failValid">
              { this.props.fail_valids.comment }
            </div>
          }

        </div>
        <div
          className="buttons">
          <div className="iconButton" onClick={ () => this.onCancelEdit() }>
            ❌ Cancel
          </div>
          <div className="iconButton" onClick={ () => this.onSaveEdit() }>
            ✅ Save
          </div>
        </div>
      </form>
    );
  }
}
