import React from 'react';
import {
	Input,
	Button,
} from "muicss/react";
import 'react-datepicker/dist/react-datepicker.css';
import FormCommons from './FormCommons';

export default class InstitutionsForm extends React.Component {

	constructor() {
		super();
		this.state = {
			CLAVE_INSTITUCION: '',
			NOMBRE_INSTITUCION: '',
			DIRECCION: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(event) {
		console.log('name: ' + event.target.name + ' value: ' + event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	handleAdd() {
		FormCommons.postData('instituciones', this.state);
		this.props.onSubmit(this.state);

		this.setState({
			CLAVE_INSTITUCION: '',
			NOMBRE_INSTITUCION: '',
			DIRECCION: '',
		});

		FormCommons.submitAnimation();
	}

	render() {
		return (
			<div>
				<span className='form-header'>Agregar nuevo</span>
				<div>
					<Input onChange={this.handleChange} value={this.state.CLAVE_INSTITUCION} name='CLAVE_INSTITUCION' className="inline" label="Clave de la institución"/>
					<Input onChange={this.handleChange} value={this.state.NOMBRE_INSTITUCION} name='NOMBRE_INSTITUCION' className="inline" label="Nombre de la institución"/>
					<Input onChange={this.handleChange} value={this.state.DIRECCION} name='DIRECCION' className="inline" label="Dirección"/>
				</div>

				<Button onClick={this.handleAdd} color="primary">Terminar</Button>
			</div>
		);
	}
}