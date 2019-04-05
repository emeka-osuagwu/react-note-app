import { SAVE_NOTE, SHOW_NOTE, FETCH_NOTES, DELETE_NOTE } from '../../actions/types';
import { saveNote, getNote, fetchNotes, deleteNote } from '../../actions';

import {reactLocalStorage} from 'reactjs-localstorage';

let notes

beforeEach(() => {

	var test_data = [{
		title: "DEMO - AWS 101",
		body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
	}]
	
	reactLocalStorage.setObject('notes', test_data);

	notes = reactLocalStorage.getObject('notes');
})

describe('Test case for saveNote action', () => {
	it('has the right action', () => {
		const action = saveNote({});
		expect(action.type).toEqual(SAVE_NOTE)
	})

	it('has to right payload', () => {
		var note = {title: "new comment", body: "new body"};
		notes.push(note)
		const action = saveNote(note);
		expect(action.payload).toEqual(notes)
	})
})

describe('Test case for getNote action', () => {
	it('has the right action', () => {
		var note = {title: "new comment", body: "new body"};
		const action = getNote(note);
		expect(action.type).toEqual(SHOW_NOTE)
	})

	it('has to right payload', () => {
		var note = {title: "new comment", body: "new body"};
		const action = getNote(note);
		expect(action.payload).toEqual(note)
	})
})

describe('Test case for fetchNotes action', () => {
	it('has the right action', () => {
		const action = fetchNotes(notes);
		expect(action.type).toEqual(FETCH_NOTES)
	})

	it('has to right payload', () => {
		const action = fetchNotes(notes);
		expect(action.payload).toEqual(notes)
	})
})

describe('Test case for fetchNotes action', () => {
	it('has the right action', () => {

		const action = deleteNote("DEMO - AWS 101");
		expect(action.type).toEqual(DELETE_NOTE)
	})
})