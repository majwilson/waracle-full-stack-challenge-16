import { createCollection } from 'meteor/quave:collections';
import SimpleSchema from 'simpl-schema';

const CakeSchema = new SimpleSchema( {
  name: {
    type: String,
    defaultValue: 'Cake',
  },
  comment: {
    type: String,   // min length 5, max length 200
    defaultValue: '',
  },
  imageUrl: {
    type: String,
    defaultValue: '',
  },
  yumFactor: {
    type: Number,   // min -2, max 2
    defaultValue: 0,
  },
} );

export const CakesCollection = createCollection({
  name: 'cakes',
  schema: CakeSchema
});

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
export const resetCakes = () => {
  CakesCollection.remove( {} );
  addCake( 'Dundee Cake', '/Dundee-Cake.jpeg', 2, 'Let\'s take a look... not a trace!' );
  addCake( 'Fish Cake', '/Fish-Cake.png', -1, 'Hmmmmmmmmmmmm' );
  addCake( 'Hamburger Cake', '/Hamburger-Cake.jpg', 0, 'Looks a bit savoury' );
  addCake( 'Number Five Cake', '/Number-Five-Cake.jpeg', 1, 'I\d need at least two of these!' );
  addCake( 'Peppa Pig Birthday Cake', '/Peppa-Pig-Birthday-Cake.jpeg', 1, 'Better than sausages!' );
  addCake( 'Swiss Roll', '/Swiss-Roll.png', 1, 'Is it really a cake?' );
  addCake( 'Yellow Cake', '/Yellow-Cake.png', -2, 'DO NOT EAT!!! It\'s Uranium' );
};

function addCake( name, imageUrl, yumFactor=0, comment='' ) {
  CakesCollection.insert( { name, comment, yumFactor, imageUrl, } );
}
