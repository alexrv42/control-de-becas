import React, {Component} from 'react';
import '../App.css';
import {Appbar, Button} from 'muicss/react';
import {StickyContainer, Sticky} from 'react-sticky';
import NavBarButton from "./NavBarButton";
import StudentsView from "../StudentsView";
import Home from "../Home";

export default class AppContainer extends Component {

	constructor() {
		super();
		this.state = {
			studentPressed: false,
			goneHome: false
		}
	}

	componentDidMount() {
		fetch("https://control-de-becas-api.herokuapp.com/alumnos/16051867")
			.then(function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				response.json().then(function (data) {
					console.log(data);
				})
			}).catch(function (error) {
			console.log('err: ' + error)
		})
	}

	renderStudentsView() {
		this.setState({
			studentPressed: true
		});
		console.log('StudentsView');
	}

	goHome()
	{
		this.setState({
			goneHome: true
		});
		console.log('StudentsView');
	}

	render() {
		if (this.state.studentPressed) return <StudentsView/>;
		if (this.state.goneHome) return <Home/>;


		return (
			<div className="App">
				<Appbar className='App-bar'>
					<span onClick={this.goHome.bind(this)} className='header'>Control de Becas</span>
				</Appbar>
				<StickyContainer>
					<Sticky>
						{({style, isSticky}) =>

							<div className='App-bar-sticky' style={style}>
								<Button onClick={this.renderStudentsView.bind(this)} color='primary'>ALUMNOS</Button>
								<Button onClick={this.renderStudentsView.bind(this)} color='primary'>BECARIOS</Button>
								<Button onClick={this.renderStudentsView.bind} color='primary'>BECAS</Button>
								<Button onClick={this.renderStudentsView} color='primary'>INSTITUCIONES</Button>
								<Button onClick={this.renderStudentsView} color='primary'>ESTADOS</Button>
							</div>
						}
					</Sticky>
					{this.props.children}
				</StickyContainer>
			</div>
		);
	}
}
