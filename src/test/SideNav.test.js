// import React from 'react';
// import { mount, shallow } from "enzyme";

import Root from '../Root';
// import SideNav from '../components/SideNav.js';

// let wrapper;

// beforeEach(() => {

// 	const initialState = {
// 		notes: ['note 1', 'note 2']
// 	}

// 	wrapper = mount(
// 		<Root initialState={initialState}>
// 			<SideNav />
// 		</Root>
// 	);
// })

// afterEach(() => {
// 	wrapper.unmount();
// })

// describe('', () => {

// 	it('should show search input', () => {
// 		expect(wrapper.find('button').lenght)
// 		console.log(wrapper.find('div').lenght)
// 	});

// })



import React from 'react';
import { mount } from "enzyme";

import SideNav from '../components/SideNav.js';

let wrapper;

beforeEach(() => {

		const initialState = {
			notes: ['note 1', 'note 2']
		}

	wrapper = mount(
		<Root initialState={initialState}>
			<SideNav />
		</Root>
	);
})

afterEach(() => {
	wrapper.unmount();
})

describe('Navbar Component Test Suite', () => {

	it('should show app logo', () => {
		expect(wrapper.find('img').length).toEqual(1);
	});

	it('should show create button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});
});