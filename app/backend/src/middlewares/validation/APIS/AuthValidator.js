const { body } = require('express-validator/check');

module.exports.create = [
    body('username')
    .isString().withMessage('O nome de usuário deve ser do tipo String!')
    .isByteLength({ min: 1 }).withMessage('O nome de usuário deve conter o tamanho de pelo menos (1) byte!')
    .not().isEmpty().withMessage('O nome de usuário não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O nome de usuário não pode conter espaços em branco!"),

    body('password')
    .isString().withMessage('A senha do usuário deve ser do tipo String!')
    .isByteLength({ min: 1 }).withMessage('A senha do usuário deve conter o tamanho de pelo menos (1) byte!')
    .not().isEmpty().withMessage('A senha do usuário não pode ser vazia!')
    .matches(/^\S+$/).withMessage("A senha do usuário não pode conter espaços em branco!"),
];