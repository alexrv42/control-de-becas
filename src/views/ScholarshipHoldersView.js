import React, {Component} from 'react';
import '../App.css';
import FormExample from "../FormExample";
import "react-table/react-table.css";
import TableView from "../tables/TableView";

export default class ScholarshipHoldersView extends Component {

	handleAdd() {
		console.log('scholarships')
	}

	render() {
		return (
			<div>
				<TableView handleAdd={this.handleAdd} resource='becarios'/>
				<FormExample/>
			</div>
		);
	}
}
