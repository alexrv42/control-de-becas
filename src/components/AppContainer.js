import React, {Component} from 'react';
import '../App.css';
import {Appbar} from 'muicss/react';
import {StickyContainer, Sticky} from 'react-sticky';
import {Button} from 'muicss/react';
import NavBarButton from "./NavBarButton";

export default class AppContainer extends Component {

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

	render() {
		return (
			<div className="App">
				<Appbar className='App-bar'>
					<span style={{paddingLeft: 15}}>Control de Becas</span>
				</Appbar>
				<StickyContainer>
					<Sticky>
						{({style, isSticky}) =>

							<div className='App-bar-sticky' style={style}>
								<NavBarButton/>
								<Button color="primary">button</Button>
								<Button color="primary">button</Button>
							</div>
						}
					</Sticky>
					{this.props.children}
				</StickyContainer>
			</div>
		);
	}
}
