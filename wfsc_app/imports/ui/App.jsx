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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// SimpleSchema has validation but its too much for me to get into now!
const validation_methods = {
  name: {
    test: name => name.length > 0,
    message: 'must be specified',
  },
  comment: {
    test: comment => comment.length >= 5 && comment.length <= 200,
    message: 'must be min length 5 chars, max length 200 chars ',
  },
  imageUrl: {
    test: imageUrl => imageUrl.length > 1 && imageUrl.startsWith( '/' ),
    message: 'must be specified and must start with /',
  },
  yumFactor: {
    test: yumFactor => {
      let yum_num = parseInt( yumFactor, 10 );
      return yum_num >= -2 && yum_num <= 2;
    },
    message: 'must be a number between -2 (yuk yuk) and 2 (yum yum)',
  },
};

export const validateCake = ( cake ) => {
  let fails = {};
  Object.entries( validation_methods ).forEach( ( [ k, { test, message } ] ) => {
    if( !test( cake[ k ] ) ) {
      fails[ k ] = message;
    }
  } );
  return Object.keys( fails ).length ? fails : null;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const App = ( props ) => {
  let [ all_cakes, set_all_cakes ] = useState( [] );
  all_cakes = all_cakes || [];
  let [ selected_cake, setSelectedCake ] = useState( null );
  let [ is_popup_visible, setPopupVisible ] = useState( false );
  let [ is_cake_editable, setCakeEditable ] = useState( false );
  let [ is_cake_fresh, setCakeFresh ] = useState( false );
  let [ fail_valids, setFailValids ] = useState( {} );

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
  const onDeleteClick = async ( cake_name ) => {
    console.log( "onDeleteClick", cake_name );
    if( confirm( `Do you really want to delete '${ cake_name }'?` ) ) {
      await jsonReq( `/cakes/${ cake_name }`, 'delete' );
    }
  }
  const onClosePopUp = ( cake_name ) => {
    setPopupVisible( false );
  }

  const onSaveEdit = async ( cake_info ) => {
    console.log( "onSaveEdit", cake_info );
    fails = validateCake( cake_info );
    if( fails ) {
      setFailValids( fails );
    } else {
      setFailValids( {} );
      let method = is_cake_fresh ? 'post' : 'put';
      const result = await jsonReq( '/cakes', method, new URLSearchParams( cake_info ) );
      setPopupVisible( false );
    }
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
          fail_valids={ fail_valids }
          onSaveEdit={ onSaveEdit }
          onCancelEdit={ onCancelEdit }
        />
      </PopUp>
    </div>
  )
}
