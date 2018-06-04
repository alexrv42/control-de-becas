import React, {Component} from 'react';
import './App.css';
import FormExample from "./FormExample";
import AppContainer from "./components/AppContainer";
import "react-table/react-table.css";
import {Panel} from "muicss/react";
import StudentTable from "./tables/StudentTable";


class Home extends Component {


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
			<AppContainer>
					<FormExample/>
					<StudentTable/>
			</AppContainer>
		);
	}
}

export default Home;
