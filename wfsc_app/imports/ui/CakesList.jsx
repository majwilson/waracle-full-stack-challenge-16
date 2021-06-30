import React from 'react';

import { CakesListItem } from './CakesListItem';

export class CakesList extends React.Component {
  render() {
    return (
      <div
        class="CakesList">
        { this.props.cakes.map( ( cake, index ) => (
          <CakesListItem key={ cake._id } cake={ cake } />
        ) ) }
      </div>
    );
  }
}
