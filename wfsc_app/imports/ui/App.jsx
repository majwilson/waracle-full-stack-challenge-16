import React, { useState, useEffect } from 'react';

// import { YumIndicator } from './YumIndicator.jsx';
// import { CakesListItem } from './CakesListItem.jsx';
import { CakesList } from './CakesList.jsx';
import { CakeForm } from './CakeForm.jsx';
import { PopUp } from './PopUp.jsx';


export const App = ( props ) => {
  let [ all_cakes, set_all_cakes ] = useState( [] );
  all_cakes = all_cakes || [];
  let [ selected_cake, set_selected_cake ] = useState( null );
  let [ popup_visible, set_popup_visible ] = useState( false );
  let [ cake_editable, set_cake_editable ] = useState( false );

  useEffect( () => {
    fetchAllCakes = async () => {
      console.log( "Fetching cakes" );
      const result = await fetch( '/cakes', { headers: { Accept: 'application/json', } } );
      let _all_cakes = ( await result.json() ).cakes;
      console.log( "GOT cakes", _all_cakes );
      set_all_cakes( _all_cakes );
    }
    fetchAllCakes();
  }, [] );

  const getCakeByName = ( cake_name ) => {
    for( cake of all_cakes ) {
      if( cake.name === cake_name ) {
        return cake;
      }
    }
    return null;
  }

  const onEditClick = ( cake_name ) => {
    console.log( "onEditClick", cake_name );
    set_selected_cake( cake_name );
    set_popup_visible( true );
  }
  const onDeleteClick = ( cake_name ) => {
    console.log( "onDeleteClick", cake_name );
  }



  return (
    <div>
      <h1>Welcome to Cakes!</h1>
      <CakesList
        className="CakesList"
        cakes={ all_cakes }
        onEditClick={ onEditClick }
        onDeleteClick={ onDeleteClick }
      />
      <PopUp
        visible={ popup_visible } >
        <CakeForm
          editable={ cake_editable }
          cake={ getCakeByName( selected_cake ) }
        />
      </PopUp>
    </div>
  )
}
