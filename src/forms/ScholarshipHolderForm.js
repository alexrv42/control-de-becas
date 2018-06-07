import React from 'react';
import {
	Input,
	Button,
	Select,
	Option,
} from "muicss/react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import FormCommons from './FormCommons';

export default class ScholarshipHolderForm extends React.Component {

	constructor() {
		super();
		this.state = {
			CLAVE_BECA: '',
			NUMERO_CONTROL: '',
			FECHA_INICIO: moment(),
			FECHA_VENCIMIENTO: moment(),
			ESTATUS_BECA: 'Activa',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleVoidDateChange = this.handleVoidDateChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(event) {
		console.log('name: ' + event.target.name + ' value: ' + event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	handleStartDateChange(date) {
		this.setState({
			FECHA_INICIO: date
		});
	}

	handleVoidDateChange(date) {
		this.setState({
			FECHA_VENCIMIENTO: date
		});
	}

	handleAdd() {
		FormCommons.postData('becarios', this.state);
		this.props.onSubmit(this.state);

		this.setState({
			CLAVE_BECA: '',
			NUMERO_CONTROL: '',
			FECHA_INICIO: moment(),
			FECHA_VENCIMIENTO: moment(),
			ESTATUS_BECA: 'Activa',
		});

		FormCommons.submitAnimation();
	}

	render() {
		return (
			<div>
				<span className='form-header'>Agregar nuevo</span>
				<div>
					<Input onChange={this.handleChange} value={this.state.CLAVE_BECA} name='CLAVE_BECA' className="inline" label="Clave Beca"/>
					<Input onChange={this.handleChange} value={this.state.NUMERO_CONTROL} name='NUMERO_CONTROL' className="inline" label="Número de control"/>
					<label>Fecha de Inicio</label>
					<DatePicker
						className='date-input'
						selected={this.state.FECHA_INICIO}
						onChange={this.handleDateChange}
					/>
					<label>Fecha de Vencimiento</label>
					<DatePicker
						className='date-input'
						selected={this.state.FECHA_VENCIMIENTO}
						onChange={this.handleDateChange}
					/>
					<Select onChange={this.handleChange} name="ESTATUS_BECA" label="Estatus Beca" defaultValue="Inactiva">
						<Option value="Inactiva" label="Inactiva"/>
						<Option value="Activa" label="Activa"/>
					</Select>
				</div>

				<Button onClick={this.handleAdd} color="primary">Terminar</Button>
			</div>
		);
	}
}