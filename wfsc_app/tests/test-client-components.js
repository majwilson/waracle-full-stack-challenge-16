import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { YumIndicator } from '../imports/ui/YumIndicator.jsx';
import { CakesListItem } from '../imports/ui/CakesListItem.jsx';
import { CakesList } from '../imports/ui/CakesList.jsx';
import { CakeForm } from '../imports/ui/CakeForm.jsx';
import { PopUp } from '../imports/ui/PopUp.jsx';



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
  it('should-render', () => {
    const wrap = shallow(<CakesListItem cake={ cakes_list[ 0 ] } />);
    console.log( wrap.debug() );
  });
});


describe( 'CakesList', () => {
  it('should-render', () => {
    const wrap = shallow(<CakesList cakes={ cakes_list } />);
    console.log( wrap.debug() );
    expect( wrap.children().length ).to.eql( 3 );
  });
});


describe( 'CakeForm', () => {
  it('should-render-non-editable', () => {
    const wrap = shallow(<CakeForm cake={ cakes_list[ 1 ] } />);
    console.log( wrap.debug() );
  });
  it('should-render-editable', () => {
    const wrap = shallow(<CakeForm cake={ cakes_list[ 1 ] } editable={ true } />);
    console.log( wrap.debug() );
  });
});


describe( 'PopUp', () => {
  it('should-render-non-visible', () => {
    const wrap = shallow(<PopUp visible={ false } content={ 'POPUP-CONTENT' } />);
    console.log( wrap.debug() );
  });
  it('should-render-visible', () => {
    const wrap = shallow(<PopUp visible={ true } content={ 'POPUP-CONTENT' } />);
    console.log( wrap.debug() );
  });
});


