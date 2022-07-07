import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

//class names should not be used to find the elements.
//instead use data- attributes
describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it('Should render without errors', () => {
    // console.log(component.debug);
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logoImg');
    expect(logo.length).toBe(1);
  });
});
