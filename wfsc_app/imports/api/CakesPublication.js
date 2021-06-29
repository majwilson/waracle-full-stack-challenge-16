import { Meteor } from 'meteor/meteor';
import { CakesCollection } from '../db/CakesCollection';

Meteor.publish( 'cakes', () => {
    console.log( "CakesCollection PUBLISH!" );
    return CakesCollection.find( {} );
}, {
  url: "cakes",
  httpMethod: "get"
} );

export const Dummy = 123;

// import { Mongo } from 'meteor/mongo';
// import { SimpleRest } from 'meteor/simple:rest';

// export const CakesCollection = new Mongo.Collection( 'cakes' );
// SimpleRest.configure( {
//   collections: [ 'cakes' ]
// } );


