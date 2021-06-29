import { Meteor } from 'meteor/meteor';
import { CakesCollection } from '../db/CakesCollection';

Meteor.publish( 'cakes', () => {
  return CakesCollection.find( {} );
});

// import { Mongo } from 'meteor/mongo';
// import { SimpleRest } from 'meteor/simple:rest';

// export const CakesCollection = new Mongo.Collection( 'cakes' );
// SimpleRest.configure( {
//   collections: [ 'cakes' ]
// } );


