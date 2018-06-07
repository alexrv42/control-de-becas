import apiUrl from '../util/ApiUrl';
import 'react-datepicker/dist/react-datepicker.css';

export default class FormCommons {

	static postData(resource, data) {
		console.log('posting data');
		fetch(apiUrl + '/' + resource, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(res => console.log(res));
	}

	static submitAnimation()
	{
		window.scrollTo(0, 0);
	}

}