import React, {Component} from 'react';
import '../App.css';
import "react-table/react-table.css";
import TableView from "../tables/TableView";
import StudentForm from "../components/StudentForm";
import _ from 'lodash';

export default class StudentsView extends Component {

	constructor()
	{
		super();
		this.state = {
			addedObject: undefined
		}
	}

	handleAdd() {
		console.log('students')
	}

	handleSubmit = (object) => {
		console.log('handleSubmit');
		console.log('object: ' + JSON.stringify(object));
		this.setState({addedObject:_.clone(object)});
	};

	render() {
		return (
			<div>
				<TableView addedObject={this.state.addedObject} handleAdd={this.handleAdd} resource='alumnos'/>
				<StudentForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

