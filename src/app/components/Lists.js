import React, { Component } from 'react';

class Lists extends Component {
	
	state = {
		items: []
	};

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	}

	render() {
		let items = () => {
			return Object.keys(this.state.items).map(index => {
				return (
					<li key={index}>{ this.state.items[index] } - <a href="" onClick={this.props.deleteItem(index)}>delete</a></li>
				)
			})
		}()

		return (
			<div>
				<ul>{ items }</ul>
			</div>
		);
	}
}

export default Lists;
