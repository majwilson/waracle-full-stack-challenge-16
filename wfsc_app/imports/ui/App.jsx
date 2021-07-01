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

  const getCakeByName = ( cake_name, fallback ) => {
    if( !cake_name ) {
      return null;
    }
    matches = all_cakes.filter( c => c.name === cake_name );
    if( matches.length ) {
      return matches[ 0 ]
    }
    if( fallback !== undefined ) {
      return fallback
    }
    throw new Error( `cannot find cake ${ cake_name }!` );
  }

  const onEditClick = ( cake_name ) => {
    console.log( "onEditClick", cake_name );
    set_selected_cake( cake_name );
    set_popup_visible( true );
  }
  const onDeleteClick = ( cake_name ) => {
    console.log( "onDeleteClick", cake_name );
  }
  const onClosePopUp = ( cake_name ) => {
    set_popup_visible( false );
  }

  const onSaveEdit = ( cake_info ) => {
    console.log( "onSaveEdit", cake_info );
    set_popup_visible( false );
  }
  const onCancelEdit = () => {
    console.log( "onCancelEdit" );
    set_popup_visible( false );
  }

  const onAddCake = () => {


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
      <div
        class="appButtons"
      >
        <div className="iconButton" onClick={ () => onAddCake ) }>
          ➕ Add another cake
        </div>
      </div>

      <PopUp
        visible={ popup_visible }>
        <CakeForm
          cake={ getCakeByName( selected_cake ) }
          editable={ cake_editable }
          onSaveEdit={ onSaveEdit }
          onCancelEdit={ onCancelEdit }
        />
      </PopUp>
    </div>
  )
}
