import React, {Component} from 'react';
import '../App.css';
import "react-table/react-table.css";
import TableView from "../tables/TableView";
import ScholarshipHolderForm from "../forms/ScholarshipHolderForm";

export default class ScholarshipHoldersView extends Component {

	constructor()
	{
		super();
	}

	handleSubmit = (object) => {
		console.log('handleSubmit');
		console.log('object: ' + JSON.stringify(object));
		this.child.displayNewData(object)
	};

	render() {
		return (
			<div>
				<TableView ref={instance => { this.child = instance; }} resource='becarios'/>
				<ScholarshipHolderForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

