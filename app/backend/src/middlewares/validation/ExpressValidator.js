const { validationResult } = require('express-validator/check');

class ExpressValidator {
    validate(req, res, next){
        const errors      = validationResult(req).isEmpty();
        const errorsArray = validationResult(req).array();
        
        return !errors ? res.status(422).send(errorsArray) : next();
    }
}

module.exports = new ExpressValidator();