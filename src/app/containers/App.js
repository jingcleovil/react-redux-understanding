import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TaskAction from '../components/TaskAction';
import Lists from '../components/Lists';

import { addTask } from '../actions';

class App extends Component {
	
	submit = (task) => {
		const { dispatch } = this.props;
		dispatch(addTask(task));
	}

	render() {
		return (
			<div className="container">
				<Header/>
				<TaskAction onSubmit={this.submit}/>
				<Lists items={this.props.items}/>
			</div>
		);
	}
}

function mapToState(state) {
	const { items } = state.addTask;
	return {
		items
	}
}

export default connect(mapToState)(App);