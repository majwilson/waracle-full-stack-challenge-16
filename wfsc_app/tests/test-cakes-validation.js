import '../imports/api/CakesPublication';
import { validateCake } from '../imports/db/CakesCollection';

import { expect } from 'chai';


const good_cake = {
  name: 'Good Cake',
  comment: 'this cake is good',
  imageUrl: '/good-cake.jpg',
  yumFactor: 0,
};

const bad_cake = {
  name: 'Bad Cake',
  comment: 'this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad this cake is bad ',
  imageUrl: 'bad-cake.jpg',
  yumFactor: 5000,
};

describe( "cakes are validated", () => {
  it( 'returns-null-if-cake-is-valid', () => {
    expect( validateCake( good_cake ) ).to.eql( null );
  } );
  it( 'returns-failure-info-if-cake-is-not-valid', () => {
    expect( validateCake( bad_cake ) ).to.eql( {
      comment: "min length 5 chars, max length 200 chars ",
      imageUrl: "must be specified and must start with /",
      yumFactor: "min value -2 (yuk yuk), max value 2 (yum yum)",
    } );
  } );
} );