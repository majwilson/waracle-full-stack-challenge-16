import { Meteor } from 'meteor/meteor';
import '/imports/api/CakesPublication';
import { CakesCollection } from '/imports/db/CakesCollection';

function addCake( name, imageUrl, yumFactor=0, comment='' ) {
  CakesCollection.insert( { name, comment, yumFactor, imageUrl, } );
}

Meteor.startup(() => {
  // CakesCollection.remove( {} );
  if( CakesCollection.find().count() === 0) {
    addCake( 'Dundee Cake', '/Dundee-Cake.jpeg', 2, 'let\'s take a look... not a trace!' );
    addCake( 'Fish Cake', '/Fish-Cake.png', -1, 'Hmmmmmmmm' );
    addCake( 'Hamburger Cake', '/Hamburger-Cake.jpg', 0, 'looks savoury' );
    addCake( 'Number Five Cake', '/Number-Five-Cake.jpeg', 1, 'two of these would make 55' );
    addCake( 'Peppa Pig Birthday Cake', '/Peppa-Pig-Birthday-Cake.jpeg', 1, 'Better than sausages!' );
    addCake( 'Swiss Roll', '/Swiss-Roll.png', 1, 'is it a cake?' );
    addCake( 'Yellow Cake', '/Yellow-Cake.png', -2, 'It\'s only Uranium' );
    }
} );

