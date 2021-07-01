import React from 'react';

import { CakesListItem } from './CakesListItem';

export class CakesList extends React.Component {
  render() {
    return (
      <>
        { this.props.cakes.map( ( cake, index ) => (
          <CakesListItem
            className="CakesListItem"
            key={ cake._id }
            cake={ cake }
          />
        ) ) }
      </>
    );
  }
}
