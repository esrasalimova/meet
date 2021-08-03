import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure ({ adapter: new Adapter() });

describe('<EventList /> component', () => {
  let createdEvent;
  beforeAll(() => {
    createdEvent = shallow(<Event event={mockData[0]} />)
  });

  test('render event list', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

  test('render the event show more button', () => {
    expect(createdEvent.find('.showMore')).toHaveLength(1);
  });

  test('show more button should be false on render', () => {
    expect(createdEvent.state('show')).toBe(false);
  });

  test('if showMore is false, simulates a click showing more details', () => {
    const changeState = createdEvent.state({show: true});
    createdEvent.find('.showMore').simulate('click', changeState);
    expect(createdEvent.state('show')).toBe(true);
  });

  test('if showMore is true, simulates a click showing less details', () => {
    const changeState = createdEvent.state({show: false});
    createdEvent.find('.showLess').simulate('click', changeState);
    expect(createdEvent.state('show')).toBe(false);
  });
});