import React from 'react';
import { mount } from "enzyme";

import App from '../components/App.js';
import NavBar from '../components/common/navbar.js';
import SideNav from '../components/SideNav.js';
import MainContent from '../components/MainContent.js';

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
		// expect(wrapper.find(NavBar).length).toEqual(1);
	});

	it('should show MainContent', () => {
		// expect(wrapper.find(MainContent).length).toEqual(1);
	});

	it('should show SideNav', () => {
		expect(wrapper.find(SideNav).length).toEqual(1);
	});

});

// describe('Create Note Test Suite', () => {

// 	it('should show Navbar', () => {

// 		wrapper.setState({ show_model: true });

// 		wrapper.find('input').simulate('change', {
// 			target: {value: 'note title'}
// 		});

// 		wrapper.update();

// 		console.log(wrapper.find('input').debug());

// 		expect(wrapper.find('input').prop('value')).toEqual('note title')

// 		// console(wrapper.find('input'))
// 	});



// });