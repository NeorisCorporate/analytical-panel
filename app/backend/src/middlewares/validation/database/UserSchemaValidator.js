const { body, param } = require('express-validator/check');

module.exports.create = [
    body('username')
    .isString().withMessage('O nome de usuário deve ser do tipo String!')
    .isByteLength({ min: 1 }).withMessage('O nome de usuário deve possuir um tamanho de no mínimo (1) byte!')
    .not().isEmpty().withMessage('O nome de usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O nome de usuário não pode conter espaços em branco!")
];

module.exports.findById = [
    param('id')
    .isMongoId().withMessage('O Identificador Único do usuário deve ser do tipo Mongoose ObjectId!')
    .isByteLength({ min: 12, max: 24 }).withMessage('O Identificador Ùnico do usuário deve possuir um tamanho de no mínimo (12) bytes e de no máximo (24) bytes!')
    .not().isEmpty().withMessage('O Identificador Ùnico do usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Identificador Ùnico do usuário não pode conter espaços em branco!")
];

module.exports.findByUsername = [
    param('username')
    .isString().withMessage('O nome de usuário deve ser do tipo String!')
    .isByteLength({ min: 1 }).withMessage('O nome de usuário deve possuir um tamanho de no mínimo (1) byte!')
    .not().isEmpty().withMessage('O nome de usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O nome de usuário não pode conter espaços em branco!")
];