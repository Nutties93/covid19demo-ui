
import client from './rest-module'
import axios from 'axios'


//YARD IDS
export  function getYardId(widgetname) {
	// body...
	return dispatch =>{
		return client().post('/ofserver/ofgetallyards', widgetname);
	};
};


export  function getSiteSummaryData(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/actracker/getsitesummarydata', data);
	};
};

export  function getEmployeeList(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/acemployees/getemployeelist', data);
	};
};


export  function searchEmployee(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/acemployees/searchemployee', data);
	};
};


export  function getEmployeeDetails(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/acemployees/getemployeedetails', data);
	};
};


export  function getAllSites(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/acsites/getallsites', data);
	};
};

export  function getEmployeeTracingDetails(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/acemployees/getemployeecontacttracingdetails', data);
	};
};


export  function setEmployeeQuarantine(data) {
	// body...
	return dispatch =>{
		return client().post('acserver/acemployees/setquarantine', data);
	};
};
