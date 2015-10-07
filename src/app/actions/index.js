export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

function onAddTask(task) {
	return {
		type: ADD_TASK,
		task
	}
}

function onDelete(id) {
	return {
		type: DELETE_TASK,
		id
	}
}

export function deleteTask(index) {
	return dispatch => {
		return dispatch(onDelete(index));
	}
}

export function addTask(task) {
	return dispatch => {
		return dispatch(onAddTask(task));
	}
}