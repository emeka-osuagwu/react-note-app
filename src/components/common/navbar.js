import React from 'react';

export default class SideNav extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-light navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					<img className="d-inline-block align-top" src="images/logo.png" style={{width: 30, height: 30}} />
					NoteApp
				</a>

				<ul className="nav justify-content-end">
				  <li className="nav-item">
				    <a className="nav-link active" href="#" onClick={this.props.fireHandleShow}>Create</a>
				  </li>
				</ul>
			</nav>
		)
	}
}