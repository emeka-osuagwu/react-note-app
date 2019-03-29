import React from 'react';

const NavBar = () => (
	<nav className="navbar navbar-light navbar-dark bg-dark">
		<a className="navbar-brand" href="#">
			<img className="d-inline-block align-top" src="images/logo.png" style={{width: 30, height: 30}} />
			NoteApp
		</a>

		<ul class="nav justify-content-end">
		  <li class="nav-item">
		    <a class="nav-link active" href="#">Create</a>
		  </li>
		</ul>
	</nav>
);

export default NavBar;