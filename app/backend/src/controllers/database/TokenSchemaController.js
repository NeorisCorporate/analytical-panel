const TokenModel = require('../../models/TokenModel');

class TokenSchemaController {
    async create(req, res){
        try {
            const { tokenJWT, userObjectId } = req.body;
            const findToken = await TokenModel.findOne({ token: { $eq: tokenJWT } });

            if(findToken){
                return res.status(200).send({ 
                    document: null,
                    msg:      `O Token JWT de Autenticação (${tokenJWT}) já existe!` 
                });
            } else {
                const token = await TokenModel.create({ 
                    token:   tokenJWT, 
                    user:    userObjectId,
                    expired: false,
                });

                return res.status(200).send({ 
                    document: token,
                    msg:      `O usuário com o Identificador Ùnico (${userObjectId}) agora está autenticado com o Token JWT!` 
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' });
        }

    }

    async findById(req, res){
        try {
            const { tokenObjectId, userObjectId } = req.query;
            const token = await TokenModel.findOne({
                $and: [
                    { _id:  { $eq: tokenObjectId } },
                    { user: { $eq: userObjectId  } }
                ]
            });

            if(token){
                const { _id, user } = token;
                return res.status(200).send({ 
                    document: token,
                    msg:      `O Token JWT com Identificador Ùnico (${_id}) para autenticação do usuário com Identificador Ùnico (${user}) foi encontrado com sucesso!` 
                });
            } else {
                return res.status(200).send({ 
                    document: null,
                    msg:      `O Token JWT com o Identificador Ùnico (${_id}) não foi encontrado!` 
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' });
        }
    }

    async update(req, res){
        try {
            const { tokenJWT, expiredAt, expired } = req.body;
            const token = await TokenModel.updateOne({ 
                $and: [{ token:  { $eq: tokenJWT } }]}, 
                {
                    expired:   expired,
                    expiredAt: expiredAt
                });

            return (token.nModified > 0) ?  res.status(200).send({ msg: `O Token JWT (${tokenJWT}) foi modificado!` }) : res.status(200).send({ msg: `O Token JWT (${tokenJWT}) não foi modificado, pois o valor do atributo de Expiração era o mesmo que antes!` });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' });
        }
    }
}

module.exports = new TokenSchemaController();