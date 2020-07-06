/* Orange Copyright restricted MVP */

import client from './rest-module';

export default function setAuthToken(token) {
    if(token){
        client().defaults.headers.common['Authorization'] = 'Bearer '+ token;

    }
    else{
        delete client().defaults.headers.common['Authorization'];
    }
};