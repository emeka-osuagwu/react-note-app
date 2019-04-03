import React from 'react';

export default function NavBar(){
	return (
		<nav className="navbar navbar-light navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				<img className="d-inline-block align-top" src="images/logo.png" style={{width: 30, height: 30}} />
				NoteApp
			</a>
		</nav>
	)
}