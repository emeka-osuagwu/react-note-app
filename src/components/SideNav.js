import React from 'react';
import {Modal, Button} from "react-bootstrap"
import { connect } from 'react-redux'
import * as actions from '../actions' 

class SideNav extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			show_create_model: false,
			title: "",
			body: ""
		}
	}

	componentWillReceiveProps(props){
		this.generateFilterList(props.notes)
	}

	componentDidMount(){
		var items = [];
		this.generateFilterList(this.props.notes)
	}

	handleOpenCreateModel = () => {
		this.setState({show_create_model: !this.state.show_create_model})
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	addNote = () => {

		if (this.state.title == '' || this.state.title == undefined || this.state.body == '' || this.state.body == undefined) {
			alert('all fields are required')
		}
		else{
			var note = {
				title: this.state.title,
				body: this.state.body
			}

			this.props.saveNote(note)

			this.setState({
				title: "",
				body: ""
			})		
		}
	}

	generateFilterList = (notes) => {

		var items = [];
		
		var notes = notes.filter(function(note){	
			items.push(note.title)
		});

		this.setState({items: items})
	}

	filterList = (event) => {
		var notes = this.props.notes;
		var items = [];
		
		notes = notes.filter(function(note){
			return note.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});

		notes = notes.filter(function(note){	
			items.push(note.title)
		});

		this.setState({items: items})		
	}

	setCurrentNote = (note_title) => {
		var note = this.props.notes.find(note => note.title === note_title);
		this.props.getNote(note);
	}

	renderNotes(){
		return(
			<div className="list-group">
				{this.state.items.map((item, key) =>
					<button onClick={()=>{this.setCurrentNote(item)}} key={key} type="button" className="list-group-item list-group-item-action">{item}</button>
				)}
			</div>
		)
	}

	renderCreateModel(){
		return (
			<Modal show={this.state.show_create_model}>
				<Modal.Header>
						<Modal.Title>Create Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="email" name="title" className="form-control note_title_input" placeholder="Note title" value={this.state.title} onChange={this.handleChange} />
					<br />
					<textarea name="body" className="form-control note_body_input" value={this.state.body} rows="5" placeholder="Note" onChange={this.handleChange}></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleOpenCreateModel}>
						Close
					</Button>
					<Button variant="primary" onClick={this.addNote}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	render() {
		return (
		    <div className="col-2 side_bar_wrapper bg-light" style={{height: `100vh`, padding: 10, paddingTop: 10}}>
				{this.renderCreateModel()}
				<div>
					<button type="button" onClick={this.handleOpenCreateModel} style={{marginBottom: 10}} className="btn btn-primary btn-sm btn-block">Add Note</button>
					<form>
						<div className="form-group">
							<input type="text" onChange={this.filterList} className="form-control search_input" placeholder="Search" />
						</div>
					</form>
					{this.renderNotes()}
				</div>
		    </div>
		)
	}
}

function mapStateToProps(state) {

	const notes = state.notes.notes;
	const show_create_model = state.notes.show_create_model;

	return Object.assign({}, state, {
		notes
	})
}

export default connect(mapStateToProps, actions)(SideNav);
