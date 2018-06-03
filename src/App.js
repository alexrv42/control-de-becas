import React, {Component} from 'react';
import './App.css';
import FormExample from "./FormExample";
import {Appbar} from 'muicss/react';
import {StickyContainer, Sticky} from 'react-sticky';
import {Button} from 'muicss/react';

class App extends Component {

	componentDidMount() {
		console.log('did mount');
		fetch("https://control-de-becas-api.herokuapp.com/alumnos/16051867")
			.then(function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				response.json().then(function (data) {
					console.log(data[0]["NOMBRES"]);
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
							<Appbar className="App-bar-sticky" style={style}>
								<Button color="primary">button</Button>
								<Button color="primary">button</Button>
								<Button color="primary">button</Button>
								<Button color="primary">button</Button>
								<Button color="primary">button</Button>
							</Appbar>
						}
					</Sticky>

					<FormExample/>
				</StickyContainer>

			</div>
		);
	}
}

export default App;
