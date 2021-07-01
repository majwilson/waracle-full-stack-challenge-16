import { Meteor } from 'meteor/meteor';
import '/imports/api/CakesPublication';
import { CakesCollection } from '/imports/db/CakesCollection';

function addCake( name, imageUrl, yumFactor=0, comment='' ) {
  CakesCollection.insert( { name, comment, yumFactor, imageUrl, } );
}

Meteor.startup(() => {
  if( CakesCollection.find().count() === 0) {
    addCake( 'Dundee Cake', '/Dundee-Cake.jpeg', 2, '' );
    addCake( 'Easter Chocolate Cake', '/Easter-Chocolate-Cake.jpg', 1, '' );
    addCake( 'Fish Cake', '/Fish-Cake.png', -1, 'Hmmmmmmmm' );
    addCake( 'Hamburger Cake', '/Hamburger-Cake.jpg', 0, 'looks savoury' );
    addCake( 'Lemon Layer Cake', '/Lemon-Layer-Cake.jpg', 1, '' );
    addCake( 'Maltesers Cake', '/Maltesers-Cake.jpeg', 1, '' );
    addCake( 'Number Five Cake', '/Number-Five-Cake.jpeg', 1, 'numeric' );
    addCake( 'Peppa Pig Birthday Cake', '/Peppa-Pig-Birthday-Cake.jpeg', 1, '' );
    addCake( 'Purple Yam Cake', '/Purple-Yam-Cake.jpg', 1, '' );
    addCake( 'Rainbow Cake', '/Rainbow-Cake.jpg', 1, '' );
    addCake( 'Swiss Roll', '/Swiss-Roll.png', 1, 'is it a cake?' );
    addCake( 'Yellow Cake', '/Yellow-Cake.png', -2, '' );
    }
} );

