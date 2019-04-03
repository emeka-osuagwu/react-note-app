import { 
	SAVE_NOTE, 
	FETCH_NOTES, 
	UPDATE_NOTE, 
	SHOW_NOTE, 
	DELETE_NOTE,
} from '../actions/types'

const initialState = {
	notes: [],
	note: {},
	show_create_model: false,
	show_edit_model: false,
	active_content: false
}

export default function (state = initialState, action) {
	
	switch(action.type){

		case FETCH_NOTES:
			
			const notes = action.payload

			return Object.assign({}, state, {
				notes,
				active_content: false
			})

		case SHOW_NOTE:
			var note = action.payload

			return Object.assign({}, state, {
				note,
				active_content: true
			})

		case SAVE_NOTE:
			
			var new_notes = action.payload

			return Object.assign({}, state, {
				notes: new_notes
			})

		case SHOW_NOTE:
			var note = action.payload
			return [...state, {note: note}]

		case UPDATE_NOTE:
		
			var updated_notes = action.payload.notes
			var note = action.payload.note

			return Object.assign({}, state, {
				notes: updated_notes,
				note: note
			})

		case DELETE_NOTE:
			var updated_note = action.payload

			return Object.assign({}, state, {
				notes: updated_note,
				note: {},
				active_content: false
			})

		default:
			return state
	}

}