import { Dummy } from '../imports/api/CakesPublication';
import { CakesCollection } from '../imports/db/CakesCollection';

import { expect } from 'chai';
import fetch from "node-fetch";


describe( "cakes are served", () => {
  beforeEach( () => {
    CakesCollection.insert( {
      name: "Blue Cake"
    } );

    CakesCollection.insert( {
      name: "Yellow Cake"
    } );
  } );

  it( "returns a list of cakes", async () => {
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

});
