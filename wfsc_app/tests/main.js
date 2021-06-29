import assert from "assert";
import { expect } from 'chai';
import fetch from "node-fetch";

describe("wfsc_app", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "wfsc_app");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});

import { Dummy } from '../imports/api/CakesPublication';

describe( "cakes are served", () => {
  it( "returns a list of cakes", async () => {

    let url = Meteor.absoluteUrl( '/cakes' );
    console.log( "CAKES ARE SERVED", url );
    let rslt = await fetch( url, { compress: false, headers: { Accept: 'application/json' } } );
    expect( rslt.status ).to.eql( 200 );
    let cakes_list = await rslt.json();
    console.log( "cakes_list", cakes_list );
    expect( cakes_list ).to.eql( {} );
  });

});
