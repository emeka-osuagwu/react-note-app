import React from 'react';
import { mount } from "enzyme";

import App from '../components/App';
import NavBar from '../components/common/navbar';
import SideNav from '../components/SideNav';
import MainContent from '../components/MainContent';

import Root from '../Root';

let wrapper;

beforeEach(() => {
	wrapper = mount(<Root><App /></Root>);
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