import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import { configure, shallow, mount } from 'enzyme';
import waitUntil from 'async-wait-until';

import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { App } from '../imports/ui/App.jsx';

import { cakes_list } from './fixtures';


describe( 'App', () => {
  before( () => {
    fetchMock.get( '/cakes', { cakes: cakes_list } );
  } );

  it.only('should-render', async () => {
    const wrap = await mount(<App />);
    wrap.update();
    console.log( wrap.debug() );
  } );
});
