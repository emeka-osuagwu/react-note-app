import React from 'react';

export default class SideNav extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	componentWillMount(){
		var items = [];

		var notes = this.props.notes.filter(function(note){	
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

	renderButton(){
		return(
			<div className="list-group">
				{this.state.items.map((item, key) =>
					<button onClick={()=>this.props.showContent(item)} key={key} type="button" className="list-group-item list-group-item-action">{item}</button>
				)}
			</div>
		)
	}

	render() {
		return (
		    <div className="col-2 side_bar_wrapper bg-light">
				<div>
					<form>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Search" onChange={this.filterList} />
						</div>
					</form>
					{this.renderButton()}
				</div>
		    </div>
		)
	}

}