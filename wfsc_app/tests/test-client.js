import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { CakesCollection } from '../imports/db/CakesCollection';
import { CakesListItem } from '../imports/ui/CakesListItem.jsx';

describe( 'CakesListItem', () => {
  let cake_info = {
    name: 'New Cake',
    comment: 'this is a comment',
    imageUrl: '/url/to/cake.jpg',
    yumFactor: 2,
  };

  it.only('should render', () => {
    const item = shallow(<CakesListItem cake={ cake_info } />);
    console.log( item.debug() );

  });
});