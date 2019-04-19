const DatabaService = require('./DatabaseService');

class UserSchemaService {
    constructor(){
        this.databaseService = DatabaService;
    }

    async create(username){
        return await this.databaseService.config.post('/user', { username: username });
    }

    async findByUsername(username){
        return await this.databaseService.config.get(`/user/username/${username}`);
    }


}

module.exports = new UserSchemaService();