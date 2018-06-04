import React, {Component} from 'react';
import '../App.css';
import FormExample from "../FormExample";
import App from "../components/App";
import "react-table/react-table.css";
import TableView from "../tables/TableView";


class Home extends Component {

	render() {
		return (
			<div>
				<TableView resource='alumnos'/>
				<FormExample/>
			</div>
		);
	}
}

export default Home;
