import React from "react";

export default class NavBarButton extends React.Component
{
	render() {
		return (
			<div onClick={console.log('touch')}  style={{height:20, width:20, backgroundColor:'#505980'}} />
		);
	}
}