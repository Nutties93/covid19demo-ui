
import client from './rest-module';

// MOCK API: http://www.mocky.io/v2/5cd823f53000005d2174cd36
//ACTUAL API: https://iotapiserver.azurewebsites.net/ofserver/oflogin
export  function userLoginRequest(data) {
	return dispatch =>{
		return client().post('/acserver/login',data);
	};
};

export function userLogoutRequest(data){
	return dispatch =>{
		return client().post('/acserver/logout',data)
	};
};

