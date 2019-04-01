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
