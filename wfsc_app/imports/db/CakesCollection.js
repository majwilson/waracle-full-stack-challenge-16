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

