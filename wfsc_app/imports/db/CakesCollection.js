import { createCollection } from 'meteor/quave:collections';
import SimpleSchema from 'simpl-schema';

const CakeSchema = new SimpleSchema( {
  name: {
    type: String,
    defaultValue: 'Cake',
  },
  comment: {
    type: String,  // min length 5, max length 200
    defaultValue: 'Your comment',
  },
  imageUrl: {
    type: String,
    defaultValue: '',
  },
  yumFactor: {
    type: Number,
    defaultValue: 3,
  },
  // createdAt: {
  //   type: Date,
  // },
} );

export const CakesCollection = createCollection({
  name: 'cakes',
  schema: CakeSchema
});

