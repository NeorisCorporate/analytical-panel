const mongoose = require('mongoose');

class TokenModel {
    createSchema(){
        const tokenSchema = new mongoose.Schema({
            token: {
                type:     String,
                unique:   true,
                required: true
            },
            expired: {
                type:     Boolean,
                required: true,
            },
            expiredAt: {
                type: Date
            },
            user: {
                ref: 'UserModel',
                type: mongoose.Schema.Types.ObjectId,
                unique:   true,
                required: true,
            }
        });

        return tokenSchema;
    }
}

module.exports = mongoose.model('TokenModel', new TokenModel().createSchema());