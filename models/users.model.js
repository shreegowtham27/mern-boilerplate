const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true },
    surName: { type: String, required: true },
    givenName: { type: String, required: true },
    dob: { type: String, required: true },
    password: {type: String,required:true}
},
{
  timestamps: true,
});

const User = mongoose.model('user_profile', userSchema);

module.exports = User;