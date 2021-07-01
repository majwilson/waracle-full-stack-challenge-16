import React from 'react';

import { CakesListItem } from './CakesListItem';

export class CakesList extends React.Component {
  onEditClick ( cake_name ) {

  }
  onDeleteClick ( cake_name ) {

  }
  render() {
    return (
      <ul
        className="CakesList">
        { this.props.cakes.map( ( cake, index ) => (
          <CakesListItem
            key={ cake._id }
            cake={ cake }
            onEditClick={ this.onEditClick }
            onDeleteClick={ this.onDeleteClick }
          />
        ) ) }
      </ul>
    );
  }
}
