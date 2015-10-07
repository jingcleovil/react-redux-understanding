import { ADD_TASK, DELETE_TASK } from '../actions';
import { combineReducers } from 'redux';

const tasksState = {
	items: []
}


function task(state = tasksState, action) {
	switch(action.type)  {
			
		case ADD_TASK:
			return Object.assign({}, state, {
				items: [{
					id: state.items.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
					text: action.task
				},...state.items]
			})

		case DELETE_TASK: 
			return Object.assign({}, state, {
				items: state.items.filter(task => 
					task.id != action.id
				)
			})
	}	
	
	return state;
}

const app = combineReducers({
	task
})

export default app;