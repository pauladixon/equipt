import tokenService from './tokenService';

const BASE_URL = '/api/items'

export default {
    index,
    create
};

function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function create(item) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(item)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}