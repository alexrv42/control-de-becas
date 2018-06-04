import React, {Component} from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";

export default class TableView extends Component {

	apiUrl = 'https://control-de-becas-api.herokuapp.com/';

	constructor() {
		super();

		this.state = {
			tableData: [],
			columns: [],
			loadingTable: true
		}
	}

	toTitleCase(str) {
		str = str.replace('_', ' ');
		str = str.toLowerCase().split(' ');
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		str = str.join(' ');
		return str;
	};


	componentDidMount() {
		let self = this;
		fetch(this.apiUrl + this.props.resource + "/columns")
			.then(function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				response.json().then(function (data) {
					self.createTableHeaders(data);
					self.retrieveTableData();
				})
			}).catch(function (error) {
			console.log('err: ' + error)
		})
	}

	createTableHeaders(data) {
		let self = this;
		let tableAccesors = data.map(function (item) {
			return item['Field'];
		});
		let tableHeaders = tableAccesors.map(function (item) {
			return self.toTitleCase(item);
		});

		let newColumns = [];

		for (let i = 0; i < data.length; i++) {
			newColumns[i] = {
				Header: tableHeaders[i],
				accessor: tableAccesors[i]
			}
		}

		this.setState({columns: newColumns})
	}


	retrieveTableData() {
		let self = this;
		fetch(this.apiUrl + this.props.resource)
			.then(function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				response.json().then(function (data) {
					self.setState({tableData: data, loadingTable: false});
				})
			}).catch(function (error) {
			console.log('err: ' + error)
		})
	}

	render() {
		return (
			<ReactTable
				// style={{padding: 50}}
				className="-striped -highlight"
				data={this.state.tableData}
				loading = {this.state.loadingTable}
				columns={this.state.columns}
			/>
		);
	}
}

