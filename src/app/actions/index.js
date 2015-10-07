export const ADD_TASK = 'ADD_TASK';

function onAddTask(task) {
	return {
		type: ADD_TASK,
		task
	}
}

export function addTask(task) {
	return dispatch => {
		return dispatch(onAddTask(task));
	}
}