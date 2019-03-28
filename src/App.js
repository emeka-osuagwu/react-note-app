import React from 'react';

import NavBar from "./components/common/navbar"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"

import './assets/styles/style.scss';

const App = () => (
	<div>
		<NavBar />
		<div className="container-fluid content_wrapper">
			<div className="row">
				<SideNav />
				<MainContent />
			</div>
		</div>
	</div>
);

export default App;