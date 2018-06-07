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

export default class ScholarshipForm extends React.Component {

	constructor() {
		super();
		this.state = {
			CLAVE_BECA: '',
			NOMBRE_BECA: '',
			DESCRIPCION: '',
			CLAVE_INSTITUCION: '',
			FECHA_CREACION: moment(),
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(event) {
		console.log('name: ' + event.target.name + ' value: ' + event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	handleDateChange(date) {
		this.setState({
			FECHA_CREACION: date
		});
	}

	handleAdd() {
		FormCommons.postData('becas', this.state);
		this.props.onSubmit(this.state);

		this.setState({
			CLAVE_BECA: '',
			NOMBRE_BECA: '',
			DESCRIPCION: '',
			CLAVE_INSTITUCION: '',
			FECHA_CREACION: moment(),
		});

		FormCommons.submitAnimation();
	}

	render() {
		return (
			<div>
				<span className='form-header'>Agregar nuevo</span>
				<div>
					<Input onChange={this.handleChange} value={this.state.CLAVE_BECA} name='CLAVE_BECA' className="inline" label="Clave Beca"/>
					<Input onChange={this.handleChange} value={this.state.NOMBRE_BECA} name='NOMBRE_BECA' className="inline" label="Nombre de la beca"/>
					<Input onChange={this.handleChange} value={this.state.DESCRIPCION} name='DESCRIPCION' className="inline" label="Descripción"/>
					<Input onChange={this.handleChange} value={this.state.CLAVE_INSTITUCION} name='CLAVE_INSTITUCION' className="inline" label="Clave de institución"/>
					<label>Fecha de creación</label>
					<DatePicker
						className='date-input'
						selected={this.state.FECHA_CREACION}
						onChange={this.handleDateChange}
					/>
				</div>

				<Button onClick={this.handleAdd} color="primary">Terminar</Button>
			</div>
		);
	}
}