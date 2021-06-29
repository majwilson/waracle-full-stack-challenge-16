import { Meteor } from 'meteor/meteor';
import { CakesCollection } from '../db/CakesCollection';

Meteor.publish( 'cakes', () => {
    console.log( "CakesCollection PUBLISH!" );
    return CakesCollection.find( {} );
}, {
  url: "cakes",
  httpMethod: "get"
} );

Meteor.publish( 'cake-by-name', ( name ) => {
  let rslt = CakesCollection.find( { name: name } );
  if( !rslt.count() ) {
    let err = new Meteor.Error( 'not-found', name );
    err.statusCode = 404;
    throw err;
  }
  return rslt;
}, {
  url: "cakes/:0",
  httpMethod: "get"
} );

Meteor.publish( 'add-a-cake', ( { name, comment, imageUrl, yumFactor } ) => {
  let rslt = CakesCollection.find( { name: name } );
  if( rslt.count() ) {
    let err = new Meteor.Error( 'already-present', name );
    err.statusCode = 422;   //  UNPROCESSABLE ENTITY;
    throw err;
  }
  CakesCollection.insert( { name, comment, imageUrl, yumFactor } );
  return CakesCollection.find( {} );
}, {
  url: "cakes",
  httpMethod: "put",
  getArgsFromRequest: ( request ) => {
    return [ request.body ];
  }
} );

