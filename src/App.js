import React, {Component} from 'react';
import './App.css';
import FormExample from "./FormExample";
import {Appbar} from 'muicss/react';
import {StickyContainer, Sticky} from 'react-sticky';

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
					<span style={{fontSize:30, color:'#ffc9a4'}}>Control de Becas</span>
				</Appbar>
				<StickyContainer >
					<Sticky>
						{
							({
								 style,

								 // the following are also available but unused in this example
								 isSticky,
								 wasSticky,
								 distanceFromTop,
								 distanceFromBottom,
								 calculatedHeight
							 }) => {
								return (
									<Appbar className="App-bar" style={style}/>
								)
							}
						}
					</Sticky>



				<FormExample/>
				<FormExample/>
				</StickyContainer>
			</div>
		);
	}
}

export default App;
