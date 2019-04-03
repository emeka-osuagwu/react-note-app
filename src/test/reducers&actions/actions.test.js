import { SAVE_NOTE } from '../../actions/types';
import {saveNote} from '../../actions';

describe('saveNote Action Test Case', () => {
	it('has the right action', () => {
		const action = saveNote();
		expect(action.type).toEqual(SAVE_NOTE)
	})

	it('has to right payload', () => {
		const action = saveNote('new comment');
		expect(action.payload).toEqual('new comment')
	})
})