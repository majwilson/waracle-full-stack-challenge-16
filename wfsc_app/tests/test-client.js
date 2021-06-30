import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { YumIndicator } from '../imports/ui/YumIndicator.jsx';
import { CakesListItem } from '../imports/ui/CakesListItem.jsx';
import { CakesList } from '../imports/ui/CakesList.jsx';

let cakes_list = [];
cakes_list.push( {
  _id: 111,
  name: 'Blue Cake',
  comment: 'this cake is blue',
  imageUrl: '/blue-cake.jpg',
  yumFactor: 2,
} );
cakes_list.push( {
  _id: 222,
  name: 'Red Cake',
  comment: 'this cake is red',
  imageUrl: '/red-cake.jpg',
  yumFactor: 0,
} );
cakes_list.push( {
  _id: 333,
  name: 'Yellow Cake',
  comment: 'this cake is yellow',
  imageUrl: '/yellow-cake.jpg',
  yumFactor: 0,
} );



describe( 'YumIndicator', () => {
  it('should-render-2-as-yum-yum', () => {
    const wrap = shallow(<YumIndicator yumFactor="2" />);
    // console.log( wrap.debug() );
    expect( wrap.text() ).to.eql( "🤪Yum yum!!" );
  });
  it('should-render-1-as-yum', () => {
    const wrap = shallow(<YumIndicator yumFactor="1" />);
    // console.log( wrap.debug() );
    expect( wrap.text() ).to.eql( "😋Yum!" );
  });
  it('should-render-0', () => {
    const wrap = shallow(<YumIndicator yumFactor="0" />);
    // console.log( wrap.debug() );
    expect( wrap.text() ).to.eql( "😐" );
  });
  it('should-render--1-as-yuk', () => {
    const wrap = shallow(<YumIndicator yumFactor="-1" />);
    // console.log( wrap.debug() );
    expect( wrap.text() ).to.eql( "🤢Yuk!" );
  });
  it('should-render--2-as-yuk', () => {
    const wrap = shallow(<YumIndicator yumFactor="-2" />);
    // console.log( wrap.debug() );
    expect( wrap.text() ).to.eql( "🤮Yuk yuk!!" );
  });
});


describe( 'CakesListItem', () => {
  let cake_info = {
    name: 'New Cake',
    comment: 'this is a comment',
    imageUrl: '/url/to/cake.jpg',
    yumFactor: 2,
  };

  it('should-render', () => {
    const wrap = shallow(<CakesListItem cake={ cakes_list[ 0 ] } />);
    console.log( wrap.debug() );
  });
});


describe( 'CakesList', () => {
  it.only('should-render', () => {
    const wrap = shallow(<CakesList cakes={ cakes_list } />);
    console.log( wrap.debug() );
    expect( wrap.children().length ).to.eql( 3 );
  });
});