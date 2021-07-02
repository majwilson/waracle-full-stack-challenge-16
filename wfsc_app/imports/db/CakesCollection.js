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
    message: 'min length 5 chars, max length 200 chars ',
  },
  imageUrl: {
    test: imageUrl => imageUrl.length > 1 && imageUrl.startsWith( '/' ),
    message: 'must be specified and must start with /',
  },
  yumFactor: {
    test: yumFactor => yumFactor >= -2 && yumFactor <= 2,
    message: 'min value -2 (yuk yuk), max value 2 (yum yum)',
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
