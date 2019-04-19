const JWTLibrary         = require('jsonwebtoken');
const TokenSchemaService = require('../../services/HTTP/database/TokenSchemaService');

class JWT {
    async createToken(username, userObjectId){
        try {
            return await JWTLibrary.sign({ username, userObjectId }, process.env.APP, { expiresIn: 30000 });     
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    
    async verifyToken(req, res, next){
        try {
            if(req.session.user){
                const { token } = req.session.user;
                await JWTLibrary.verify(token, process.env.APP, (error, decoded) => {
                    if(error){
                        const { name, expiredAt } = error;
                        if(name === 'TokenExpiredError'){
                            const { token } = req.session.user;

                            TokenSchemaService.expireToken(token, expiredAt).catch(error => console.error(error));
                            req.session.destroy((error => console.warn(error) ));
                        } else {
                            console.error(error);
                        }

                        return res.redirect('/v1/login');
                    } else {
                        return next();
                    }
                });
            } else {
                return await res.redirect('/v1/login');
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    saveToken(req, tokenJWT){
        req.session.user = { token: tokenJWT };
    }
}

module.exports = new JWT();