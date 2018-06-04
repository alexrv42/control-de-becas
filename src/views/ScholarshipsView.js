import React, {Component} from 'react';
import '../App.css';
import FormExample from "../FormExample";
import AppContainer from "../components/AppContainer";
import "react-table/react-table.css";
import TableView from "../tables/TableView";


export default class ScholarshipsView extends Component {

	render() {
		return (
			<div>
				<TableView resource='becas'/>
				<FormExample/>
			</div>
		);
	}
}
