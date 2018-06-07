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
			CLAVE_ESTADO: '',
			NOMBRE: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(event) {
		console.log('name: ' + event.target.name + ' value: ' + event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	handleAdd() {
		FormCommons.postData('estados', this.state);
		this.props.onSubmit(this.state);

		this.setState({
			CLAVE_ESTADO: '',
			NOMBRE: ''
		});

		FormCommons.submitAnimation();
	}

	render() {
		return (
			<div>
				<span className='form-header'>Agregar nuevo</span>
				<div>
					<Input onChange={this.handleChange} value={this.state.CLAVE_ESTADO} name='CLAVE_ESTADO' className="inline" label="Clave del estado"/>
					<Input onChange={this.handleChange} value={this.state.NOMBRE} name='NOMBRE' className="inline" label="Nombre"/>
				</div>

				<Button onClick={this.handleAdd} color="primary">Terminar</Button>
			</div>
		);
	}
}