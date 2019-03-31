import React from 'react';

export default function NavBar(props){
	return (
		<nav className="navbar navbar-light navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				<img className="d-inline-block align-top" src="images/logo.png" style={{width: 30, height: 30}} />
				NoteApp
			</a>

			<ul className="nav justify-content-end">
			  <li className="nav-item">
			    <a className="nav-link active btn btn-primary" href="#" onClick={props.fireHandleShow}>Create</a>
			  </li>
			</ul>
		</nav>
	)
}