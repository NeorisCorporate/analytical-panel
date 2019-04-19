const AxiosLibrary = require('axios');

class DatabaService {
    get axios(){ return AxiosLibrary; }

    get config(){ 
        return this.axios.create({ 
            baseURL: `http://${process.env.HOST}:${process.env.PORT}`,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.ROUTE_DATABASE}`
            }
        }); 
    }
}

module.exports = new DatabaService();