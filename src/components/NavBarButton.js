import React from "react";

export default class NavBarButton extends React.Component
{

	handleClick()
	{
		console.log('click')
	}

	render() {
		return (
			<div onClick={this.handleClick}  className='App-bar-btn' />
		);
	}
}