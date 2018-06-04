import React, {Component} from 'react';
import '../App.css';
import FormExample from "../FormExample";
import AppContainer from "../components/AppContainer";
import "react-table/react-table.css";
import TableView from "../tables/TableView";


class Home extends Component {

	render() {
		return (
			<AppContainer>
				<TableView resource='alumnos'/>
				<FormExample/>
			</AppContainer>
		);
	}
}

export default Home;
