const mongoose = require('mongoose');

class UserModel {
    createSchema(){
        const userSchema = new mongoose.Schema({
            username: {
                type:     String,
                unique:   true,
                required: true
            },
            createdAt: {
                type:    Date,
                default: Date.now
            }
        });

        return userSchema;
    }
}

module.exports = mongoose.model('UserModel', new UserModel().createSchema());