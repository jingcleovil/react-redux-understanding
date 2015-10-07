import React, { Component } from 'react';

class TaskAction extends Component {
	
	state = {
		task: ''
	}

	onChange = (e) => {
		this.setState({
			task: e.target.value
		})
	}

	submit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.task);
		this.setState({
			task: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submit}>
					<input type="text" name="task" value={this.state.task} onChange={this.onChange}/>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default TaskAction;
