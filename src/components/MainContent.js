import React from 'react';
import {Modal, Button} from "react-bootstrap"
import { connect } from 'react-redux'
import * as actions from '../actions' 
 
class MainContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			show_edit_model: false,
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	componentDidMount(){
		this.props.fetchNotes()
	}

	handleOpenEditModel = () => {
		this.setState({
			show_edit_model: !this.state.show_edit_model,
			title: this.props.note.title,
			body: this.props.note.body
		})
	}

	deleteNote = (title) => {
		this.props.deleteNote(title)
	}

	updateNote = () => {
		this.props.updateNote(this.props.note.title, {title: this.state.title, body: this.state.body})
	}

	renderInitState(){
		if (!this.props.active_content) {
			return ( 
				<div className="col-8 main_content_wrapper" style={{padding: `20px 200px`}}>
					<img className="d-inline-block align-top" src="images/bg.png" />
				</div>
			)
		}
	}

	renderAction(){
		if (this.props.active_content) {
			return (
				<div>
					<span style={{marginRight: 10}} onClick={this.handleOpenEditModel} className="badge badge-primary">Edit</span>
					<span onClick={() => this.deleteNote(this.props.note.title)} className="badge badge-danger">Delete</span>
				</div>
			)
		}
	}

	renderEditModel(){
		return (
			<Modal show={this.state.show_edit_model}>
				<Modal.Header>
					<Modal.Title>Update Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="text" name="title" className="form-control title_body_input" placeholder="Note title" value={this.state.title} onChange={this.handleChange} />
					<br />
					<textarea name="body" className="form-control" value={this.state.body} placeholder="Note" onChange={this.handleChange}></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleOpenEditModel}>
						Close
					</Button>
					<Button variant="primary" onClick={this.updateNote}>
						Update
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	render() {

		return (
			<div className="col-8 main_content_wrapper" style={{padding: `20px 200px`}}>
				{this.renderInitState()}
				{this.renderEditModel()}
				{this.renderAction()}
				<h1>{this.props.note.title}</h1>
				<p className="text-justify">{this.props.note.body}</p>
			</div>
		)		
	}
}

function mapStateToProps(state) {

	const note = state.notes.note;
	const active_content = state.notes.active_content;

	return Object.assign({}, state, {
		note,
		active_content
	})
}

export default connect(mapStateToProps, actions)(MainContent);
