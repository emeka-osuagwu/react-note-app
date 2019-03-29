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
			note_body: ""
		}
	}

	componentWillMount(){

		// create test data
		var test_data = [
			{
				title: "how to build a react web application",
				body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				title: "AWS first look",
				body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
			},
		]

		// save test data
		reactLocalStorage.setObject('notes', test_data);

		this.setState({notes: test_data})
	}

	setCurrentNote = (item) => {
		var notes = reactLocalStorage.getObject('notes');

		var note = notes.find(note => note.title === item);

		this.setState({note: note})
		
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

			this.setCurrentNote(new_note)

			this.setState({
				note_body: "",
				note_title: ""
			})
		}
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

	renderCreateModel(){
		return (
			<Modal show={this.state.show_edit_model}>
				<Modal.Header closeButton>
						<Modal.Title>Create Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="email" className="form-control" placeholder="Note title" value={this.state.note_title} onChange={this.handleTitleChange.bind(this)} />
					<br />
					<textarea className="form-control" value={this.state.note_body} rows="5" placeholder="Note" onChange={this.handleBodyChange.bind(this)}></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleEditNote.bind(this)}>
						Close
					</Button>
					<Button variant="primary" onClick={this.handleCreate.bind(this)}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	handleEditNote(){
		this.setState({show_edit_model: true})
	}

	handleCloseEditModel(){
		this.setState({show_edit_model: false})
	}

	updateNote(){
		console.log('update local database')
	}

	renderEditModel(){
		return (
			<Modal show={this.state.show_edit_model}>
				<Modal.Header>
						<Modal.Title>Update Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="text" className="form-control" placeholder="Note title" value={this.state.note.title} onChange={this.handleTitleChange.bind(this)} />
					<br />
					<textarea className="form-control" value={this.state.note.body} rows="5" placeholder="Note" onChange={this.handleBodyChange.bind(this)}></textarea>
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

	render(){
		return (
			<div>
				<NavBar />
				<div className="container-fluid content_wrapper">
					<div className="row">
						<SideNav notes={this.state.notes} showContent={this.setCurrentNote.bind(this)} />
						{this.renderCreateModel()}
						{this.renderEditModel()}
						<MainContent editNote={this.handleEditNote.bind(this)} note={this.state.note} />
					</div>
				</div>
			</div>
			
		)
	}
}
