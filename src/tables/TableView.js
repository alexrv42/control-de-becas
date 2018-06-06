import React, {Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import 'react-fab/dist/main.scss';
import {Button} from "muicss/react";
import apiUrl from '../util/ApiUrl';

export default class TableView extends Component {


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

	handleFab(value)
	{
		console.log(JSON.stringify(value));
	}


	componentDidMount() {
		let self = this;
		fetch(apiUrl + "/" + this.props.resource + "/columns")
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

		newColumns.push({
			id: 'edit',
			accessor: '16051867',
			Cell: ({value}) => (<Button color='danger' onClick={this.handleFab({value})}>Borrar</Button>)
		});

		this.setState({columns: newColumns})
	}


	retrieveTableData() {
		let self = this;
		fetch(apiUrl + "/" + this.props.resource)
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
			<div>
				<ReactTable
					style={{marginBottom: 35}}
					className="-striped -highlight"
					data={this.state.tableData}
					columns={this.state.columns}
					loading={this.state.loadingTable}
					minRows={5}
					defaultPageSize={10}
					filterable={true}
					pageText='Página'
					previousText='Siguiente'
					nextText='Anterior'
					loadingText='Cargando...'
					ofText='de'
					rowsText='filas'
					column={{
						// Renderers
						Cell: undefined,
						Header: undefined,
						Footer: undefined,
						Aggregated: undefined,
						Pivot: undefined,
						PivotValue: undefined,
						Expander: undefined,
						Filter: undefined,
						// Standard options
						sortable: undefined, // use table default
						resizable: undefined, // use table default
						filterable: undefined, // use table default
						show: true,
						minWidth: 120,
						// Cells only
						className: '',
						style: {},
						getProps: () => ({}),
						// Headers only
						headerClassName: '',
						headerStyle: {},
						getHeaderProps: () => ({}),
						// Footers only
						footerClassName: '',
						footerStyle: {},
						getFooterProps: () => ({}),
						filterAll: false,
						filterMethod: undefined,
						sortMethod: undefined,
						defaultSortDesc: undefined,
					}}
				/>
				{/*<Button onClick={this.props.handleAdd} color='primary'>Add new</Button>*/}

			</div>
		);
	}
}

