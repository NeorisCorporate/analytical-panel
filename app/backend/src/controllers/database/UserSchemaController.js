const UserModel = require('../../models/UserModel');
const Mongoose  = require('mongoose');

class UserSchemaController {
    async create(req, res){
        try {
            const { username } = req.body;
            const findUser = await UserModel.findOne({ username });

            if(findUser){
                return res.status(200).send({ 
                    document: null,
                    msg:      `O usuário ${username.toUpperCase()} já contém cadastro!` 
                });
            } else {
                const user = await UserModel.create({ username });
                return res.status(200).send({ 
                    document: user,
                    msg:      `O usuário ${username.toUpperCase()} foi criado com sucesso!` 
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' });
        }
    }

    async findById(req, res){
        try {
            const { id } = req.params;
            const user = await UserModel.findById(Mongoose.Types.ObjectId(id));
            
            if(user){
                const username = user.username.toUpperCase();
                return res.status(200).send({ 
                    document: user,
                    msg:      `O usuário ${username} foi encontrado com sucesso!` 
                });
            } else {
                return res.status(200).send({ 
                    document: null,
                    msg:      `O usuário com o Identificador Ùnico (${id}) não foi encontrado!` 
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' });
        }
    }

    async findByUsername(req, res){
        try {
            const { username } = req.params;
            const user = await UserModel.findOne({ username: { $eq: username } });

            if(user){
                return res.status(200).send({ 
                    document: user,
                    msg:      `O usuário ${username.toUpperCase()} foi encontrado com sucesso!` 
                });
            } else {
                return res.status(200).send({ 
                    document: null,
                    msg:      `O usuário ${username.toUpperCase()} não foi encontrado!` 
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'ERRO INTERNO NO SERVIDOR!' });
        }
    }
}

module.exports = new UserSchemaController();