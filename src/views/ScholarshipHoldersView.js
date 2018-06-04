import React, {Component} from 'react';
import '../App.css';
import FormExample from "../FormExample";
import App from "../components/App";
import "react-table/react-table.css";
import TableView from "../tables/TableView";

export default class ScholarshipHoldersView extends Component {

	render() {
		return (
			<div>
				<TableView resource='becarios'/>
				<FormExample/>
			</div>
		);
	}
}
