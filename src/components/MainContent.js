import React from 'react';

export default class MainContent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-8 main_content_wrapper">
				<span onClick={this.props.editNote} className="badge badge-primary">Edit</span>
				<h1>{this.props.note.title}</h1>
				<p className="text-justify">{this.props.note.body}</p>
			</div>
		)
	}
}
