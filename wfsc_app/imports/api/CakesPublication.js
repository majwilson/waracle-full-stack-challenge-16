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
  return CakesCollection.find( { name: name } );
}, {
  url: "cakes/:0",
  httpMethod: "get"
} );
