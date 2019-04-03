import { 
	SAVE_NOTE, 
	FETCH_NOTES, 
	UPDATE_NOTE, 
	SHOW_NOTE, 
	DELETE_NOTE,
	OPEN_CREATE_MODEL
} from './types'

import {reactLocalStorage} from 'reactjs-localstorage';

export function saveNote(note) {

	var notes = reactLocalStorage.getObject('notes');

	notes.push(note)

	reactLocalStorage.setObject('notes', notes);

	return {
		type: SAVE_NOTE,
		payload: notes
	}
}

export function getNote(note) {
	return {
		type: SHOW_NOTE,
		payload: note
	}
}

export function fetchNotes() {

	const notes = reactLocalStorage.getObject('notes');

	return {
		type: FETCH_NOTES,
		payload: notes
	}
}

export function deleteNote(title) {

	var notes = reactLocalStorage.getObject('notes');

	var updated_notes = []

	for(var i=0;  i<notes.length; i++){
		if(notes[i]['title'] != title) {
			updated_notes.push(notes[i]);
		}
	}

	reactLocalStorage.setObject('notes', updated_notes);

	var notes = reactLocalStorage.getObject('notes');

	return {
		type: DELETE_NOTE,
		payload: notes
	}
}

export function updateNote(old_title, note) {

	var notes = reactLocalStorage.getObject('notes');

	var note_position = notes.findIndex(item => item.title == old_title);

	var update = {
		title: note.title,
		body: note.body
	}

	notes[note_position] = update

	reactLocalStorage.setObject('notes', notes);

	var update_notes = reactLocalStorage.getObject('notes')

	return {
		type: UPDATE_NOTE,
		
		payload: {
			notes: update_notes,
			note: update
		}
	}
}

