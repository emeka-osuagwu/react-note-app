import React from 'react';
import { mount } from "enzyme";

import MainContent from '../components/MainContent.js';

let wrapper;

beforeEach(() => {
	wrapper = mount(<MainContent />);
})

afterEach(() => {
	wrapper.unmount();
})

describe('MainContent Component Test Suite', () => {

	it('should show init image when component load', () => {
		expect(wrapper.find('img').length).toEqual(1);
	});
	

	it('should show Navbar', () => {

		wrapper.setState({ show_model: true });

		wrapper.find('input').simulate('change', {
			target: {value: 'note title'}
		});

		wrapper.update();

		console.log(wrapper.find('input').debug());

		expect(wrapper.find('input').prop('value')).toEqual('note title')
	});


});