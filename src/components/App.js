import React from 'react';

import NavBar from "./common/navbar"
import SideNav from "./SideNav"
import MainContent from "./MainContent"
import {Modal, Button} from "react-bootstrap"
import {reactLocalStorage} from 'reactjs-localstorage';

import '../assets/styles/style.css';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			note: {},
			show_model: false,
			show_action: true
		}
	}

	componentWillMount(){
		var test_data = [{
			title: "DEMO - AWS 101",
			body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
		}]

		if(this.isEmpty(reactLocalStorage.getObject('notes'))) {
			reactLocalStorage.setObject('notes', test_data);
		}

	}

	isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}

	render() {
		return (
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
	}
}
