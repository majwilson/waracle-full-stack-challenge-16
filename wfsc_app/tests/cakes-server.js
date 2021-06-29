import '../imports/api/CakesPublication';
import { CakesCollection } from '../imports/db/CakesCollection';

import { expect } from 'chai';
import fetch from "node-fetch";

/* global Meteor */

const jsonReq = async ( url ) => {
  return await fetch( url, { compress: false, headers: { Accept: 'application/json' } } );
};

describe( "cakes are served", () => {
  beforeEach( () => {
    CakesCollection.insert( {
      name: "Blue Cake"
    } );

    CakesCollection.insert( {
      name: "Yellow Cake"
    } );
  } );

  it( "returns-a-list-of-cakes", async () => {
    let url = Meteor.absoluteUrl( '/cakes' );
    // console.log( "CAKES ARE SERVED", url );
    let rslt = await fetch( url, { compress: false, headers: { Accept: 'application/json' } } );
    expect( rslt.status ).to.eql( 200 );
    let cakes_list = ( await rslt.json() ).cakes;
    // console.log( "cakes_list", cakes_list );
    expect( cakes_list.length ).to.eql( 2 );
    expect( cakes_list[ 0 ].name ).to.eql( "Blue Cake" );
    expect( cakes_list[ 1 ].yumFactor ).to.eql( 3 );
  });

  it.only( "gets-a-cake-by-name", async () => {
    let cake_name = "Blue Cake";
    let url = Meteor.absoluteUrl( `/cakes/${ cake_name }` );
    // console.log( "A CAKE IS FOUND", url );
    let rslt = await jsonReq( url );
    expect( rslt.status ).to.eql( 200 );
    let cakes_list = ( await rslt.json() ).cakes;
    // console.log( "cakes_list", cakes_list );
    expect( cakes_list.length ).to.eql( 1 );
    expect( cakes_list[ 0 ].name ).to.eql( "Blue Cake" );
  });

});
