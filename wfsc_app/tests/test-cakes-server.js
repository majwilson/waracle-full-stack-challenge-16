import '../imports/api/CakesPublication';
import { CakesCollection } from '../imports/db/CakesCollection';

import { expect } from 'chai';
import fetch from "node-fetch";

/* global Meteor */

const jsonReq = async ( url, method, body ) => {
  return await fetch( url, {
      method,
      body,
      compress: false,
      headers: { Accept: 'application/json' }
    } );
};

// -------------------------------------------------------------------------------------------------
describe( "cakes are served", () => {
  beforeEach( () => {
    CakesCollection.remove( {} );
    CakesCollection.insert( {
      name: "Blue Cake"
    } );
    CakesCollection.insert( {
      name: "Yellow Cake"
    } );
  } );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  describe( "get-a-list", () => {
    it( "returns-a-list-of-cakes", async () => {
      let url = Meteor.absoluteUrl( '/cakes' );
      let rslt = await jsonReq( url );
      expect( rslt.status ).to.eql( 200 );
      let cakes_list = ( await rslt.json() ).cakes;
      expect( cakes_list.length ).to.eql( 2 );
      expect( cakes_list[ 0 ].name ).to.eql( "Blue Cake" );
      expect( cakes_list[ 1 ].yumFactor ).to.eql( 0 );
    } );
  } );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  describe( "get-a-cake", () => {
    it( "gets-a-cake-by-name", async () => {
      let cake_name = "Blue Cake";
      let url = Meteor.absoluteUrl( `/cakes/${ cake_name }` );
      let rslt = await jsonReq( url );
      expect( rslt.status ).to.eql( 200 );
      let cakes_list = ( await rslt.json() ).cakes;
      expect( cakes_list.length ).to.eql( 1 );
      expect( cakes_list[ 0 ].name ).to.eql( "Blue Cake" );
    } );

    it( "raises-404-if-it-fails-to-get-a-cake-by-name", async () => {
      let cake_name = "ORANGE Cake";
      let url = Meteor.absoluteUrl( `/cakes/${ cake_name }` );
      let rslt = await jsonReq( url );
      expect( rslt.status ).to.eql( 404 );
    } );
  } );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  describe( "post (add)", () => {
    it( "adds-a-new-cake", async () => {
      let cake_info = {
        name: 'New Cake',
        comment: 'this is a comment',
        imageUrl: '/url/to/cake.jpg',
        yumFactor: 5,
      };
      let url = Meteor.absoluteUrl( `/cakes` );
      let rslt = await jsonReq( url, 'post', new URLSearchParams( cake_info ) );
      expect( rslt.status ).to.eql( 200 );
      expect( CakesCollection.find( {} ).count() ).to.eql( 3 );
      expect( CakesCollection.findOne( { name: cake_info.name } ).name ).to.eql( cake_info.name );
    } );

    it( "raises-422-if-adding-a-cake-with-duplicate-name", async () => {
      let cake_info = {
        name: "Blue Cake",
        comment: 'this is a comment',
        imageUrl: '/url/to/cake.jpg',
        yumFactor: 5,
      };
      let url = Meteor.absoluteUrl( `/cakes` );
      let rslt = await jsonReq( url, 'post', new URLSearchParams( cake_info ) );
      expect( rslt.status ).to.eql( 422 );
      expect( CakesCollection.find( {} ).count() ).to.eql( 2 );
    } );
  } );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  describe( "put (update)", () => {
    it( "updates-a-new-cake", async () => {
      let cake_info = {
        name: 'Blue Cake',
        comment: 'this is an updated comment',
        imageUrl: '/url/to/cake.jpg',
        yumFactor: 5,
      };
      let url = Meteor.absoluteUrl( `/cakes` );
      let rslt = await jsonReq( url, 'put', new URLSearchParams( cake_info ) );
      expect( rslt.status ).to.eql( 200 );
      expect( CakesCollection.find( {} ).count() ).to.eql( 2 );
      expect( CakesCollection.findOne( { name: cake_info.name } ).comment ).to.eql( cake_info.comment );
    } );
    it( "raises-404-if-updating-a-cake-with-non-existent-name", async () => {
      let cake_info = {
        name: "ORANGE Cake",
        comment: 'this is a comment',
        imageUrl: '/url/to/cake.jpg',
        yumFactor: 5,
      };
      let url = Meteor.absoluteUrl( `/cakes` );
      let rslt = await jsonReq( url, 'put', new URLSearchParams( cake_info ) );
      expect( rslt.status ).to.eql( 404 );
      expect( CakesCollection.find( {} ).count() ).to.eql( 2 );
    } );
  } );

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  describe( "delete", () => {
    it( "deletes-a-cake", async () => {
      let cake_name = "Blue Cake";
      let url = Meteor.absoluteUrl( `/cakes/${ cake_name }` );
      let rslt = await jsonReq( url, 'delete' );
      expect( rslt.status ).to.eql( 200 );
      expect( CakesCollection.find( {} ).count() ).to.eql( 1 );
    } );

    it( "does-nothing-if-deleting-a-cake-that-is-not-there", async () => {
      let cake_name = "ORANGE Cake";
      let url = Meteor.absoluteUrl( `/cakes/${ cake_name }` );
      let rslt = await jsonReq( url, 'delete' );
      expect( rslt.status ).to.eql( 200 );
      expect( CakesCollection.find( {} ).count() ).to.eql( 2 );
    } );
  } );
});


