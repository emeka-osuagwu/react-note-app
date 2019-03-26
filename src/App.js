import React from 'react';

const App = () => (
	<div>
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img className="d-inline-block align-top" src="images/logo.png" style={{width: 30, height: 30}} />
				NoteApp
			</a>
		</nav>

		<div class="container-fluid">
		  <div class="row">
		    <div class="col-2">side bar</div>
		    <div class="col-8">main content</div>
		  </div>
		</div>

	</div>
);

export default App;