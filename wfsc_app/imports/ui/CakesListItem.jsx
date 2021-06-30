import React from 'react';

export class CakesListItem extends React.Component {
  render() {
    return (
      <div
        class="CakesListItem">
        <div
          class="name">
          { this.props.cake.name }
        </div>
        <div
          class="yumFactor">
          { this.props.cake.yumFactor }
        </div>
        <div
          class="imageWrapper">
          <img
            class="image"
            src={ this.props.cake.imageUrl }
          />
        </div>
        <div
          class="comment">
          { this.props.cake.comment }
        </div>
      </div>
    );
  }
}
