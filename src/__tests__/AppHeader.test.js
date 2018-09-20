import React from 'react';
import AppHeader from '../components/AppHeader'

import { shallow } from 'enzyme';


let wrapped;

beforeEach(() => {
    wrapped = shallow(<AppHeader/>);
});

describe('app header test cases', () => {
    
    it('css class added' , () => {
        expect(wrapped.find('.header-div').length).toEqual(1);
    })

})