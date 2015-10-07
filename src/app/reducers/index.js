import { ADD_TASK } from '../actions';
import { combineReducers } from 'redux';

const tasksState = {
	items: []
}

function addTask(state = tasksState, action) {
	switch(action.type)  {
		case ADD_TASK:
			return Object.assign({}, state, {
				items: [
					action.task,
					...state.items
				]
			})
			break;
	}
	
	return state;
}

const app = combineReducers({
	addTask
})

export default app;