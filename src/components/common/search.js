import React from 'react';

export default class Search extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					title: "how to build a docker app",
					body: "fvkjdfvjdfhvjdfhvjdhfvjdhfjh"
				},
				{
					title: "how to cook rice",
					body: "fvkjdfvjdfhvjdfhvjdhfvjdhfjh"
				},
			]
		}
	}

	render() {
		return (
			<form>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Search" />
				</div>
			</form>
		)
	}

}