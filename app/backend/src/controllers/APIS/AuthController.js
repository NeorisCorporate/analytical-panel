const JWTMiddleware      = require('../../middlewares/authentication/JWT');
const UserSchemaService  = require('../../services/HTTP/database/UserSchemaService');
const TokenSchemaService = require('../../services/HTTP/database/TokenSchemaService');

class AuthController {
    /** @todo EM CONSTRUÇÃO */
    async create(req, res){
        try {
            const { username, password } = req.body;
            // INSERIR AQUI A API DA ALIANSCE PARA COMPARAR OS USUÁRIOS
            if(username === 'thiagodebonis' && password === '123'){
                const findUser = await UserSchemaService.findByUsername(username);

                if(findUser.data.document){
                    const JWT   = await JWTMiddleware.createToken(findUser.data.document.username, findUser.data.document._id);
                    const token = await TokenSchemaService.create(JWT, findUser.data.document._id);

                    JWTMiddleware.saveToken(req, token.data.document.token);

                    return res.status(200).send({ auth: true });
                } else {
                    const user  = await UserSchemaService.create(username);
                    const JWT   = await JWTMiddleware.createToken(user.data.document.username, user.data.document._id);
                    const token = await TokenSchemaService.create(JWT, user.data.document._id);
                    
                    JWTMiddleware.saveToken(req, token.data.document.token);

                    return res.status(200).send({ auth: true });
                }
            } else {
                return res.status(401).send({ msg: 'NÃO AUTORIZADO!' });
            }
        } catch (error) {
            console.error(error);
            console.error(error.response.data);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' }); 
        }
    }
}

module.exports = new AuthController();