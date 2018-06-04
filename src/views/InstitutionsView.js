import React, {Component} from 'react';
import '../App.css';
import FormExample from "../FormExample";
import AppContainer from "../components/AppContainer";
import "react-table/react-table.css";
import TableView from "../tables/TableView";


export default class InstitutionsView extends Component {

	render() {
		return (
			<div>
				<TableView resource='instituciones'/>
				<FormExample/>
			</div>
		);
	}
}
