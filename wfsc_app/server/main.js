import { Meteor } from 'meteor/meteor';
import '/imports/api/CakesPublication';
import { CakesCollection, resetCakes } from '/imports/db/CakesCollection';


Meteor.startup(() => {
  // CakesCollection.remove( {} );
  if( CakesCollection.find().count() === 0) {
    resetCakes();
    }
} );

