import React from "react"
import {render} from "react-dom"
import App from './components/App';

import Root from './Root'

const rootElem = document.getElementById('root');

render( 
	<Root>
		<App />
	</Root>, 
rootElem)