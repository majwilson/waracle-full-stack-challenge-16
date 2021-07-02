import React, { useState, useEffect } from 'react';

// import { YumIndicator } from './YumIndicator.jsx';
// import { CakesListItem } from './CakesListItem.jsx';
import { CakesList } from './CakesList.jsx';
import { CakeForm } from './CakeForm.jsx';
import { PopUp } from './PopUp.jsx';


const jsonReq = async ( url, method, body ) => {
  return await fetch( url, {
      method,
      body,
      compress: false,
      headers: { Accept: 'application/json' }
    } );
};


export const App = ( props ) => {
  let [ all_cakes, set_all_cakes ] = useState( [] );
  all_cakes = all_cakes || [];
  let [ selected_cake, setSelectedCake ] = useState( null );
  let [ is_popup_visible, setPopupVisible ] = useState( false );
  let [ is_cake_editable, setCakeEditable ] = useState( false );
  let [ is_cake_fresh, setCakeFresh ] = useState( false );

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
    let cake_info = getCakeByName( cake_name );
    setSelectedCake( cake_info );
    setCakeFresh( false );
    setCakeEditable( true );
    setPopupVisible( true );
  }
  const onDeleteClick = ( cake_name ) => {
    console.log( "onDeleteClick", cake_name );
  }
  const onClosePopUp = ( cake_name ) => {
    setPopupVisible( false );
  }

  const onSaveEdit = async ( cake_info ) => {
    console.log( "onSaveEdit", cake_info );
    let method = is_cake_fresh ? 'post' : 'put';
    const result = await jsonReq( '/cakes', method, new URLSearchParams( cake_info ) );
    setPopupVisible( false );
  }
  const onCancelEdit = () => {
    console.log( "onCancelEdit" );
    setPopupVisible( false );
  }

  const onAddCake = () => {
    const blank_cake = {
      name: "New Cake",
      comment: '',
      imageUrl: '/Fallback-Cake.png',
      yumFactor: 0,
    }
    setSelectedCake( blank_cake );
    setCakeFresh( true );
    setCakeEditable( true );
    setPopupVisible( true );
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
        className="appButtons" onClick={ onAddCake }
      >
        <div className="iconButton" >
          ➕ Add another cake
        </div>
      </div>

      <PopUp
        visible={ is_popup_visible }>
        <CakeForm
          cake={ selected_cake }
          editable={ is_cake_editable }
          onSaveEdit={ onSaveEdit }
          onCancelEdit={ onCancelEdit }
        />
      </PopUp>
    </div>
  )
}
