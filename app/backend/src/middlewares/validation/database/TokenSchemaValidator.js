const { body, query } = require('express-validator/check');

module.exports.create = [
    body('tokenJWT')
    .isString().withMessage('O Token JWT de Autenticação deve ser do tipo String!')
    .isByteLength({ min: 128, max: 255 }).withMessage('O Token JWT de Autenticação deve possuir um tamanho de no mínimo (128) bytes e maximo de (256) bytes!')
    .not().isEmpty().withMessage('O Token JWT de Autenticação não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Token JWT de Autenticação não pode conter espaços em branco!"),

    body('userObjectId')
    .isMongoId().withMessage('O Identificador Ùnico do usuário deve ser do tipo Mongoose ObjectId!')
    .isByteLength({ min: 12, max: 24 }).withMessage('O Identificador Ùnico do usuário deve possuir um tamanho de no mínimo (12) bytes e de no máximo de (24) bytes!')
    .not().isEmpty().withMessage('O Identificador Ùnico do usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Identificador Ùnico do usuário não pode conter espaços em branco!")
];

module.exports.update = [
    body('tokenJWT')
    .isString().withMessage('O Token JWT de Autenticação deve ser do tipo String!')
    .isByteLength({ min: 128, max: 255 }).withMessage('O Token JWT de Autenticação deve possuir um tamanho de no mínimo (128) bytes e maximo de (256) bytes!')
    .not().isEmpty().withMessage('O Token JWT de Autenticação não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Token JWT de Autenticação não pode conter espaços em branco!"),

    body('expired')
    .isBoolean().withMessage('O Atributo de Expiração do Token deve ser do tipo Boolean')
    .isByteLength({ min: 4, max: 5 }).withMessage('O Atributo de Expiração deve possuir um tamanho de no mínimo (4) bytes e de no máximo de (5) bytes!')
    .not().isEmpty().withMessage('O Atributo de Expiração não pode ser vazio!')
    .not().isString().withMessage('O Atributo de Expiração deve ser do tipo Boolean!')
    .matches(/^\S+$/).withMessage("O Atributo de Expiração não pode conter espaços em branco!"),

    body('expiredAt')
    .isString().withMessage('A Data de expiração do Token deve ser to tipo String')
    .isByteLength({ min: 1 }).withMessage('A Data de expiração do Token deve possuir um tamanho de no mínimo (1) byte!')
    .not().isEmpty().withMessage('A Data de expiração do Token não pode ser vazio!')
    .matches(/^\S+$/).withMessage('A Data de expiração do Token não pode conter espaços em branco!')
];

module.exports.findById = [
    query('tokenObjectId')
    .isMongoId().withMessage('O Identificador Ùnico do Token do usuário deve ser do tipo Mongoose ObjectId!')
    .isByteLength({ min: 12, max: 24 }).withMessage('O Identificador Ùnico do Token do usuário deve possuir um tamanho de no mínimo (12) bytes e de no máximo de (24) bytes!')
    .not().isEmpty().withMessage('O Identificador Ùnico do Token do usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Identificador Ùnico do Token do usuário não pode conter espaços em branco!"),

    query('userObjectId')
    .isMongoId().withMessage('O Identificador Ùnico do usuário deve ser do tipo Mongoose ObjectId!')
    .isByteLength({ min: 12, max: 24 }).withMessage('O Identificador Ùnico do usuário deve possuir um tamanho de no mínimo (12) bytes e de no máximo de (24) bytes!')
    .not().isEmpty().withMessage('O Identificador Ùnico do usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Identificador Ùnico do usuário não pode conter espaços em branco!")
];