import { SAVE_NOTE } from '../../actions/types';
import noteReducer from '../../reducers/notes';

it('handles action of type SAVE_NOTE', () => {

	const action = {
		type: SAVE_NOTE,
		payload: 'New Comment'
	};

	const newState = noteReducer([], action);

	expect(newState).toEqual(['New Comment'])
})

it('handles action of with unknown type', () => {

	const action = {
		type: SAVE_NOTE,
		payload: 'New Comment'
	};

	const newState = noteReducer([], {type: 'SOME_TYPE'});

	expect(newState).toEqual([])
})