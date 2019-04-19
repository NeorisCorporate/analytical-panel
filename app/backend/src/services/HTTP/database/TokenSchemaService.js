const DatabaService = require('./DatabaseService');

class TokenSchemaService {
    constructor(){
        this.databaseService = DatabaService;
    }

    async create(tokenJWT, userObjectId){
        return await this.databaseService.config.post('/token', { 
            tokenJWT:     tokenJWT, 
            userObjectId: userObjectId
        });
    }

    async expireToken(tokenJWT, expiredAt){
        return await this.databaseService.config.put('/token', { 
            tokenJWT:  tokenJWT,
            expiredAt: expiredAt,
            expired:   true,
        });
    }


}

module.exports = new TokenSchemaService();