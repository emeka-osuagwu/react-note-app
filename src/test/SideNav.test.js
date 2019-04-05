import React from 'react';
import { mount, shallow } from "enzyme";
import Root from '../Root';
import SideNav from '../components/SideNav';

let wrapper;

beforeEach(() => {

	const initialState = {
		notes: {notes: [{title: "test_titile_1", body: "title_body_1"}]}
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

it('should show search input', () => {
	expect(wrapper.find('input').length).toEqual(1);
});

it('should show add note button', () => {
	expect(wrapper.render().text()).toContain('Add Note');
});
