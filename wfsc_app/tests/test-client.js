import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { YumIndicator } from '../imports/ui/YumIndicator.jsx';
import { CakesListItem } from '../imports/ui/CakesListItem.jsx';

describe( 'YumIndicator', () => {
  it('should-render-2-as-yum-yum', () => {
    const item = shallow(<YumIndicator yumFactor="2" />);
    // console.log( item.debug() );
    expect( item.text() ).to.eql( "🤪Yum yum!!" );
  });
  it('should-render-1-as-yum', () => {
    const item = shallow(<YumIndicator yumFactor="1" />);
    // console.log( item.debug() );
    expect( item.text() ).to.eql( "😋Yum!" );
  });
  it('should-render-0', () => {
    const item = shallow(<YumIndicator yumFactor="0" />);
    // console.log( item.debug() );
    expect( item.text() ).to.eql( "😐" );
  });
  it('should-render--1-as-yuk', () => {
    const item = shallow(<YumIndicator yumFactor="-1" />);
    // console.log( item.debug() );
    expect( item.text() ).to.eql( "🤢Yuk!" );
  });
  it('should-render--2-as-yuk', () => {
    const item = shallow(<YumIndicator yumFactor="-2" />);
    // console.log( item.debug() );
    expect( item.text() ).to.eql( "🤮Yuk yuk!!" );
  });
});

describe( 'CakesListItem', () => {
  let cake_info = {
    name: 'New Cake',
    comment: 'this is a comment',
    imageUrl: '/url/to/cake.jpg',
    yumFactor: 2,
  };

  it.only('should-render', () => {
    const item = shallow(<CakesListItem cake={ cake_info } />);
    console.log( item.debug() );

  });
});