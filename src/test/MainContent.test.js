import React from 'react';
import { mount } from "enzyme";

import Root from '../Root';
import MainContent from '../components/MainContent';

let wrapper;

beforeEach(() => {
	wrapper = mount(<Root><MainContent /></Root>);
})

afterEach(() => {
	wrapper.unmount();
})

describe('MainContent Component Test Suite', () => {

	it('should show init image when component load', () => {
		expect(wrapper.find('img').length).toEqual(1);
	});

});