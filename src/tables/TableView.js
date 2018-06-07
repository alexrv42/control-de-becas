import React, {Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import 'react-fab/dist/main.scss';
import {Button} from "muicss/react";
import apiUrl from '../util/ApiUrl';
import _ from 'lodash';
import moment from "moment";

export default class TableView extends Component {

	primaryKeyColumn;

	constructor() {
		super();

		this.state = {
			tableData: [],
			columns: [],
			loadingTable: true,
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

	deleteRow(value) {
		const rowId = value.value;
		const self = this;
		console.log('Row to delete: ' + rowId);
		fetch(apiUrl + '/' + this.props.resource + '/' + rowId, {
			method: 'delete',
			// headers: {
			// 	'Accept': 'application/json',
			// 	'Content-Type': 'application/json'
			// },
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
				self.removeRowFromStateData(rowId);
			});
	}

	removeRowFromStateData(rowId) {
		let newData = _.clone(this.state.tableData);
		for (let i = 0; i < newData.length; i++) {
			if (rowId === newData[i][this.primaryKeyColumn]) {
				console.log('rowId: ' + rowId);
				console.log('newData[i][this.primaryKeyColumn]: ' + newData[i][this.primaryKeyColumn]);
				console.log('index of item:' + i);
				newData.splice(i, 1);


				this.setState({
					tableData: newData
				});
				break;
			}
		}
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

			// to be able to find this specific row
			if (item["Key"] === "PRI") {
				self.primaryKeyColumn = item["Field"];
			}
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
			accessor: this.primaryKeyColumn,
			Cell: ({value}) => (<Button  color='danger' onClick={() => this.deleteRow({value})}>Borrar</Button>)
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

	displayNewData(object) {
		console.log('component did update');

		let dataInTable = _.clone(this.state.tableData);

		if (object !== undefined) {
			console.log('addedObject not undefined');
			let clone = _.clone(object);

			for (let property in clone) {
				if (clone.hasOwnProperty(property)) {
					if(moment.isMoment(clone[property])) // ponerle formato si es un objeto moment
					{
						console.log('There is an instance of moment');
						clone[property] = clone[property].format();
					}
					clone[property] = clone[property] + '';
				}
			}

			console.log('defined, showing in table: ');
			console.log(clone);

			dataInTable.push(clone);
			this.setState({
				tableData: dataInTable
			});
		}
		else {
			console.log('undefined, not pushing');
		}
	}


	render() {
		return (
			<div>
				<span className='form-header'>{this.toTitleCase(this.props.resource)}</span>
				<ReactTable
					style={{marginBottom: 35}}
					className="-striped -highlight"
					data={this.state.tableData}
					columns={this.state.columns}
					loading={this.state.loadingTable}
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

			</div>
		);
	}
}

