import React, {Component} from 'react';
// import '../App.css';
import ReactTable from 'react-table'
import "react-table/react-table.css";

export default class TableView extends Component {

	constructor() {
		super();

		this.state = {
			tableData: []
		}
	}


	toTitleCase(str) {
		str = str.toLowerCase().split(' ');
		for (var i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		str = str.join(' ');
		str = str.replace('_', ' ');
		return str;
	};


	columns = [
		{
			Header: 'No. Control',
			accessor: 'NUMERO_CONTROL'
		},
		{
			Header: 'Nombres',
			accessor: 'NOMBRES' // String-based value accessors!
		},
		{
			Header: 'Apellido Paterno',
			accessor: 'APELLIDO_PATERNO',
		},
		{
			Header: 'Apellido Materno',
			accessor: 'APELLIDO_MATERNO'
		},
		{
			Header: 'Especialidad',
			accessor: 'ESPECIALIDAD'
		}];

	componentDidMount() {
		let self = this;
		console.log('did mount');
		fetch("https://control-de-becas-api.herokuapp.com/" + this.props.resource + "/columns")
			.then(function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				response.json().then(function (data) {
					self.setState({tableData: data});
				})
			}).catch(function (error) {
			console.log('err: ' + error)
		})
	}

	render() {
		return (
			<ReactTable
				style={{padding: 50}}
				className="-striped -highlight"
				data={this.state.tableData}
				columns={this.columns}
			/>
		);
	}
}
