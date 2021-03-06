import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TaskAction from '../components/TaskAction';
import Lists from '../components/Lists';

import { addTask, deleteTask } from '../actions';

class App extends Component {
	
	submit = (task) => {
		const { dispatch } = this.props;
		dispatch(addTask(task));
	}

	deleteItem = (index) => {
		return e => {
			e.preventDefault();
			const { dispatch } = this.props;
			dispatch(deleteTask(index));
		}
	}

	render() {
		return (
			<div className="container">
				<Header/>
				<TaskAction onSubmit={this.submit}/>
				<Lists items={this.props.items} deleteItem={this.deleteItem}/>
			</div>
		);
	}
}

function mapToState(state) {
	const { items } = state.task;

	return {
		items
	}
}

export default connect(mapToState)(App);
