import React, {Component} from 'react';
import '../App.css';
import {Appbar, Button, Container, Panel} from 'muicss/react';
import {StickyContainer, Sticky} from 'react-sticky';
// import NavBarButton from "./NavBarButton";
import StudentsView from "../views/StudentsView";
import Home from "../Home";
import ScholarshipHoldersView from "../views/ScholarshipHoldersView";
import ScholarshipsView from "../views/ScholarshipsView";
import InstitutionsView from "../views/InstitutionsView";
import StatesView from "../views/StatesView";

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			view: <Home/>
		}
	}


	render() {

		return (
			<div className='App'>
				<Appbar className='App-bar'>
					<span onClick={() => this.setState({view: <Home/>})} className='header'>Control de Becas</span>
				</Appbar>
				<StickyContainer>
					<Sticky>
						{({style, isSticky}) =>
							<div className='App-bar-sticky' style={style}>
								<Button onClick={() => this.setState({view : <StudentsView/>})} color='primary'>ALUMNOS</Button>
								<Button onClick={() => this.setState({view : <ScholarshipHoldersView/>})} color='primary'>BECARIOS</Button>
								<Button onClick={() => this.setState({view : <ScholarshipsView/>})} color='primary'>BECAS</Button>
								<Button onClick={() => this.setState({view : <InstitutionsView/>})} color='primary'>INSTITUCIONES</Button>
								<Button onClick={() => this.setState({view : <StatesView/>})} color='primary'>ESTADOS</Button>
							</div>
						}
					</Sticky>
					<Container style={{paddingTop: 50}}>
						<Panel className="container">
							{this.state.view}
						</Panel>
					</Container>
				</StickyContainer>

			</div>
		);
	}

}
