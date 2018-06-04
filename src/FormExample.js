import React from 'react';
import {
	Form,
	Input,
	Textarea,
	Button,
	Radio,
	Dropdown,
	DropdownItem,
	Select,
	Option
} from "muicss/react";
import Checkbox from 'rc-checkbox';


export default class FormExample extends React.Component {
	render() {
		return (

			<Form style={{flex: 1, justifyContent: 'flex-start'}}>
				<legend>Title</legend>
				<div>
					<Input className="inline" label="Nombre"/>
					<Input className="inline" label="Apellido"/>
				</div>
				<Select name="input" label="Select Example" defaultValue="option2">
					<Option value="option1" label="Option 1"/>
					<Option value="option2" label="Option 2"/>
					<Option value="option3" label="Option 3"/>
					<Option value="option4" label="Option 4"/>
				</Select>
				<Input label="Input 2"/>
				<Dropdown color="primary" label="Dropdown">
					<DropdownItem link="#/link1">Option 1</DropdownItem>
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem>Option 3</DropdownItem>
					<DropdownItem>Option 4</DropdownItem>
				</Dropdown>
				<Checkbox className='mui-checkbox' name="inputA1" label="Option one" defaultChecked={true}/>

				<Checkbox name="inputA3" label="Option three is disabled" disabled={true}/>
				<Radio name="inputB" label="Option one" defaultChecked={true}/>
				<Radio name="inputB" label="Option two"/>
				<Radio name="inputB" label="Option three is disabled" disabled={true}/>
				<Textarea placeholder="Textarea"/>
				<Button color="primary">button</Button>

			</Form>
		);
	}
}

