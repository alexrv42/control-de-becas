import apiUrl from '../util/ApiUrl';
import 'react-datepicker/dist/react-datepicker.css';

export default class FormCommons {

	static timeOut;

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
		// while (document.body.scrollTop !== 0) {
		// 	this.timeOut = setTimeout(()=> {
		// 		if (document.body.scrollTop === 0)
		// 		{
		// 			clearTimeout(this.timeOut)
		// 		}
		// 		window.scrollBy(0, -50)
		// 	}, 10);
		// }

		window.scrollTo(0,0);
	}

}