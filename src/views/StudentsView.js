import React, {Component} from 'react';
import '../App.css';
import "react-table/react-table.css";
import TableView from "../tables/TableView";
import StudentForm from "../components/StudentForm";


class Home extends Component {

	handleAdd() {
		console.log('students')
	}

	render() {
		return (
			<div>
				<TableView handleAdd={this.handleAdd} resource='alumnos'/>
				<StudentForm/>
			</div>
		);
	}
}

export default Home;
