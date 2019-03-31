import React from 'react';

import NavBar from "./components/common/navbar"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import {Modal, Button} from "react-bootstrap"
import {reactLocalStorage} from 'reactjs-localstorage';

import './assets/styles/style.scss';

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			note: {},
			notes: [],
			show_model: false,
			show_edit_model: false,
			note_title: "",
			note_body: "",
			show_action: false,
		}
	}

	componentWillMount(){
		// load data from database
		this.setState({notes: reactLocalStorage.getObject('notes')})
	}

	deleteNoteDB = (title) => {
		var notes = reactLocalStorage.getObject('notes');
		var updated_notes = []

		for(var i=0;  i<notes.length; i++){
			if(notes[i]['title'] != title) {
				updated_notes.push(notes[i]);
			}
		}

		reactLocalStorage.setObject('notes', updated_notes);
		this.setState({notes: updated_notes})
	}

	setCurrentNote = (item) => {
		var note = this.state.notes.find(note => note.title === item);
		this.setState({
			note: note,
			show_action: true
		})
	}

	updateNote = () => {

		var old_title = this.state.note.title;

		var notes = reactLocalStorage.getObject('notes');

		var update = {
			title: this.state.note_title,
			body: this.state.note_body
		}

		var note_position = notes.findIndex(item => item.title == old_title);

		notes[note_position] = update
		reactLocalStorage.setObject('notes', notes);
		this.setState({
			notes: notes,
			note: update
		})
		console.log(notes)





		// console.log(this.state.note_body)
		// this.setState({notes: notes})
	}

	handleCreate = () => {
		
		if (this.state.note_body == '' || this.state.note_body == undefined || this.state.note_title == '' || this.state.note_title == undefined) {
			alert('all fields are required')
		}
		else
		{
			var new_note = {
				title: this.state.note_title,
				body: this.state.note_body
			}

			this.updateNote(new_note)
			this.setCurrentNote(new_note.title)

			this.setState({
				note_body: "",
				note_title: ""
			})
		}
	}

	deleteNote = () => {
		var notes = this.state.notes;
		var note = this.state.notes.find(note => note.title === this.state.note.title)
		
		this.deleteNoteDB(note.title)

		this.setState({
			show_action: false
		})
	}

	handleClose() {
	  this.setState({ show_model: false });
	}

	handleShow() {
	  this.setState({ show_model: true });
	}

	handleTitleChange(event) {
		this.setState({note_title: event.target.value});
	}

	handleBodyChange(event) {
		this.setState({note_body: event.target.value});
	}

	handleEditNote(){
		this.setState({
			show_edit_model: true,
			note_body: this.state.note.body,
			note_title: this.state.note.title
		})
	}

	handleCloseEditModel(){
		this.setState({show_edit_model: false})
	}

	renderEditModel(){
		return (
			<Modal show={this.state.show_edit_model}>
				<Modal.Header>
					<Modal.Title>Update Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="text" className="form-control" placeholder="Note title" value={this.state.note_title} onChange={this.handleTitleChange.bind(this)} />
					<br />
					<textarea className="form-control" value={this.state.note_body} placeholder="Note" onChange={this.handleBodyChange.bind(this)}></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleCloseEditModel.bind(this)}>
						Close
					</Button>
					<Button variant="primary" onClick={this.updateNote.bind(this)}>
						Update
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	renderCreateModel(){
		return (
			<Modal show={this.state.show_model}>
				<Modal.Header>
						<Modal.Title>Create Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="email" className="form-control" placeholder="Note title" value={this.state.note_title} onChange={this.handleTitleChange.bind(this)} />
					<br />
					<textarea className="form-control" value={this.state.note_body} rows="5" placeholder="Note" onChange={this.handleBodyChange.bind(this)}></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleClose.bind(this)}>
						Close
					</Button>
					<Button variant="primary" onClick={this.handleCreate.bind(this)}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	render(){
		return (
			<div>
				<NavBar fireHandleShow={this.handleShow.bind(this)} />
				<div className="container-fluid content_wrapper">
					<div className="row">
						<SideNav notes={this.state.notes} showContent={this.setCurrentNote.bind(this)} />
						{this.renderCreateModel()}
						{this.renderEditModel()}
						<MainContent show_action={this.state.show_action} editNote={this.handleEditNote.bind(this)} note={this.state.note} deleteNote={this.deleteNote.bind(this)} />
					</div>
				</div>
			</div>
		)
	}
}
