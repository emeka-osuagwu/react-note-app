import React from 'react';
import { mount } from "enzyme";

import App from '../components/App.js';
import NavBar from '../components/common/navbar.js';
import SideNav from '../components/SideNav.js';
import MainContent from '../components/MainContent.js';

let wrapper;

beforeEach(() => {
	wrapper = mount(<App />);
})

afterEach(() => {
	wrapper.unmount();
})

describe('App Component Test Suite', () => {

	it('should show Navbar', () => {
		expect(wrapper.find(NavBar).length).toEqual(1);
	});

	it('should show MainContent', () => {
		expect(wrapper.find(MainContent).length).toEqual(1);
	});

	it('should show SideNav', () => {
		expect(wrapper.find(SideNav).length).toEqual(1);
	});

});