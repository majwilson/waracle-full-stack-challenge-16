import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { App } from '../imports/ui/App.jsx';


describe( 'App', () => {
  it.only('should-render', () => {
    const wrap = shallow(<App />);
    console.log( wrap.debug() );
  });
});
