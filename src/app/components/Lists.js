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
					<li key={this.state.items[index].id}>
						{ this.state.items[index].text } - <a href="" onClick={this.props.deleteItem(this.state.items[index].id)}>delete</a>
					</li>
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
