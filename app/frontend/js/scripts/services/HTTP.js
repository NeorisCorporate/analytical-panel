class HTTPService {
    constructor(){
        this.axios = axios;
    }

    get config(){ 
        return this.axios.create({ 
            baseURL: `http://localhost:3000`,
            timeout: 1000,
            withCredentials: true
        }); 
    }

    async authenticateUser(username, password){
        return await this.axios.post('/api/authentication', {
            username: username,
            password: password
        });
    }
}