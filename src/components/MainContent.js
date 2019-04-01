import React from 'react';

export default class MainContent extends React.Component {

	constructor(props) {
		super(props);
	}

	renderAction(){
		if (this.props.show_action) {
			return (
				<div>
					<span style={{marginRight: 10}} onClick={this.props.editNote} className="badge badge-primary">Edit</span>
					<span onClick={this.props.deleteNote} className="badge badge-danger">Delete</span>
				</div>
			)
		}
	}

	renderInitState(){
		return ( 
			<div className="col-8 main_content_wrapper" style={{padding: `20px 200px`}}>
				<img className="d-inline-block align-top" src="images/bg.png" />
			</div>
		)
	}

	render() {

		if (!this.props.show_action) {
			return this.renderInitState()
		}
		else{
			return (
				<div className="col-8 main_content_wrapper" style={{padding: `20px 200px`}}>
					{this.renderAction()}
					<h1>{this.props.note.title}</h1>
					<p className="text-justify">{this.props.note.body}</p>
				</div>
			)		
		}
	}
}
