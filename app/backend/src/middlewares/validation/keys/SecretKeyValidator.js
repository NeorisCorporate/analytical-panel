const { header } = require('express-validator/check');

module.exports.database = [
    header('authorization')
    .isString().withMessage('A chave secreta de autorização deve ser do tipo String!')
    .isByteLength({ min: 71, max: 71 }).withMessage('A chave secreta de autorização deve possuir um tamanho de (71) bytes!')
    .not().isEmpty().withMessage('A chave secreta de autorização não pode ser vazia!')
    .custom((authorization, { req }) => {
        const bearerAuth  = req.headers['authorization'];
        const splitAuthString = authorization.split(' '),
              hasBearerPrefix = (splitAuthString[0] === 'Bearer') ? true : false,
              hasSecretKey    = hasBearerPrefix ? splitAuthString[1].trim() : false;

        if(bearerAuth !== authorization)                                 { throw new Error('A chave secreta de autorização não é a mesma encaminhada na requisição!'); }
        if(!hasBearerPrefix)                                             { throw new Error('O prefixo da chave secreta de autorização deve ser do tipo Bearer!');      }
        if(!hasSecretKey && hasSecretKey !== process.env.ROUTE_DATABASE) { throw new Error('A chave secreta de autorização encaminhada na requisição é inválida!');    }
     
        return true;
    })
];