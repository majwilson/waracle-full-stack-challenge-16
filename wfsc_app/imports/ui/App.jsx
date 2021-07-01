import React from 'react';

// import { YumIndicator } from './YumIndicator.jsx';
// import { CakesListItem } from './CakesListItem.jsx';
import { CakesList } from './CakesList.jsx';
import { CakeForm } from './CakeForm.jsx';
import { PopUp } from './PopUp.jsx';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Cakes!</h1>
        <CakesList
          cakes={ [] }
        />
        <PopUp
          visible={ false } >
          <CakeForm
            editable={ false }
          />
        </PopUp>
      </div>
    )
  }
}
