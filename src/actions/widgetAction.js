
import client from './rest-module'
import axios from 'axios'


//YARD IDS
export  function getYardId(widgetname) {
	// body...
	return dispatch =>{
		return client().post('/ofserver/ofgetallyards', widgetname);
	};
};
