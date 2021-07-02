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
