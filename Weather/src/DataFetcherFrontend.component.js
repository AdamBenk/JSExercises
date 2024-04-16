import axios from 'axios';

export default class DataFetcherFrontend {
    
    async fetch(params) {
        return await axios.get('http://localhost:8088/weather-data')
        .then(response => {
            return response.data;
        });
    }
}