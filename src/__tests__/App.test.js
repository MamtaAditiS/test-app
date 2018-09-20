import React from 'react';
import App from '../containers/App'
import { shallow } from 'enzyme';


let wrapped;

beforeEach(() => {
    wrapped = shallow(<App/>);
});


describe('Running test cases for App' , () => {
  
  it('should execute after component loads', () => {
    expect(wrapped.find('.App').length).toEqual(1); 
  });
  
  it('should execute after app div ', () => {
    expect(wrapped.find('.app-column1').length).toEqual(1);
  });
  
  it('should execute after column 1 div', () => {
    expect(wrapped.find('.app-column2').length).toEqual(1)
  });

})
