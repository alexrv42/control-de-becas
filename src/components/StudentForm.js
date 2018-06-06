import React from 'react';
import {
	Form,
	Input,
	Button,
	Select,
	Option,
} from "muicss/react";
import apiUrl from '../util/ApiUrl';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default class StudentForm extends React.Component {

	constructor() {
		super();
		this.state = {
			NUMERO_CONTROL: '',
			NOMBRES: '',
			APELLIDO_PATERNO: '',
			APELLIDO_MATERNO: '',
			ESPECIALIDAD: 'Industrial',
			FECHA_NACIMIENTO: moment(),
			CORREO: '',
			TELEFONO: '',
			DIRECCION: '',
			COLONIA: '',
			MUNICIPIO: '',
			ESTADO: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(event) {
		console.log('name: ' + event.target.name + ' value: ' + event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	handleDateChange(date)
	{
		this.setState({
			FECHA_NACIMIENTO: date
		});
	}

	handleAdd() {
		console.log('Posting: ' + JSON.stringify(this.state));
		console.log('Api: ' + JSON.stringify(apiUrl + '/alumnos'));
		fetch(apiUrl + '/alumnos', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		}).then(res => res.json())
			.then(res => console.log(res));

		this.setState({
			NUMERO_CONTROL: '',
			NOMBRES: '',
			APELLIDO_PATERNO: '',
			APELLIDO_MATERNO: '',
			ESPECIALIDAD: '',
			FECHA_NACIMIENTO: moment(),
			CORREO: '',
			TELEFONO: '',
			DIRECCION: '',
			COLONIA: '',
			MUNICIPIO: '',
			ESTADO: ''
		});
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				{/*<Form style={{flex: 1, justifyContent: 'flex-start'}}>*/}
					<legend>Agregar alumno</legend>
					<div>
						<Input onChange={this.handleChange} name='NUMERO_CONTROL' className="inline"
								 label="Número de Control"/>
						<Input onChange={this.handleChange} name='NOMBRES' className="inline" label="Nombres"/>
						<Input onChange={this.handleChange} name='APELLIDO_PATERNO' className="inline"
								 label="Apellido Paterno"/>
						<Input onChange={this.handleChange} name='APELLIDO_MATERNO' className="inline"
								 label="Apellido Materno"/>
					</div>
					<Select onChange={this.handleChange} name="ESPECIALIDAD" label="Especialidad" defaultValue="Industrial">
						<Option value="Industrial" label="Industrial"/>
						<Option value="Materiales" label="Materiales"/>
						<Option value="Gestión Empresarial" label="Gestión Empresarial"/>
						<Option value="Electronica" label="Electrónica"/>
						<Option value="Electrica" label="Eléctrica"/>
						<Option value="Mecatronica" label="Mecatrónica"/>
						<Option value="Mecanica" label="Mecánica"/>
						<Option value="Sistemas" label="Sistemas"/>
					</Select>
					<label>Fecha de nacimiento</label>
					<DatePicker
						className='date-input'
						selected={this.state.FECHA_NACIMIENTO}
						onChange={this.handleDateChange}
					/>
					<Input style={{marginTop:20}} onChange={this.handleChange} name='CORREO' label="Correo"/>
					<Input onChange={this.handleChange} name='TELEFONO' label="Teléfono"/>
					<Input onChange={this.handleChange} name='DIRECCION' label="Dirección"/>
					<Input onChange={this.handleChange} name='COLONIA' label="Colonia"/>
					<Input onChange={this.handleChange} name='MUNICIPIO' label="Municipio"/>
					<Input onChange={this.handleChange} name='ESTADO' label="Estado"/>
					<Button onClick={this.handleAdd} color="primary">Terminar</Button>
				{/*</Form>*/}
			</div>
		);
	}
}