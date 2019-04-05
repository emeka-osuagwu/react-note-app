import React from 'react';
import { mount } from "enzyme";

import NavBar from '../components/common/navbar';

let wrapper;

beforeEach(() => {
	wrapper = mount(<NavBar />);
})

afterEach(() => {
	wrapper.unmount();
})

describe('Navbar Component Test Suite', () => {

	it('should show app logo', () => {
		expect(wrapper.find('img').length).toEqual(1);
	});

	it('should show app title', () => {
		expect(wrapper.render().text()).toContain('NoteApp');
	});
});