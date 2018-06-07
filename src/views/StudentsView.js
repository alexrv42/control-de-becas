import React, {Component} from 'react';
import '../App.css';
import "react-table/react-table.css";
import TableView from "../tables/TableView";
import StudentForm from "../forms/StudentForm";

export default class StudentsView extends Component {

	constructor()
	{
		super();
	}

	handleSubmit = (object) => {
		console.log('handleSubmit');
		console.log('object: ' + JSON.stringify(object));
		// this.setState({addedObject:_.clone(object)});
		this.child.displayNewData(object)
	};

	render() {
		return (
			<div>
				<TableView ref={instance => { this.child = instance; }} resource='alumnos'/>
				<StudentForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

