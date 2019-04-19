const { header } = require('express-validator/check');

/** @todo CONTINUAR! */
module.exports.token = [
    header('authorization')
    .isString().withMessage('O Token JWT de Autenticação deve ser do tipo String!')
    .isByteLength({ min: 128, max: 255 }).withMessage('O Token JWT de Autenticação deve possuir um tamanho de no mínimo (128) bytes e maximo de (256) bytes!')
    .not().isEmpty().withMessage('O Token JWT de Autenticação não pode ser vazio!')
    .matches(/^\S+$/).withMessage("O Token JWT de Autenticação não pode conter espaços em branco!")
    .customSanitizer(authorization => {
        const splitAuthString = authorization.split(' ');
        const tokenJWT = splitAuthString[1].trim();
        return tokenJWT;
    })
];