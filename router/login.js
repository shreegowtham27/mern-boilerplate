const router = require('express').Router();
const bcrypt = require('bcrypt')
let User = require('../models/users.model');
const UserSession = require('../models/UserSession.model.js');


router.route('/login').post((req, res) => {
  const userName = req.body.userName;
  const SaltedPass =  bcrypt.genSalt(10)
  const encryptedPass = bcrypt.hash(req.body.password,SaltedPass)
  // const password = encryptedPass;

  console.log(userName)
  console.log(encryptedPass)


  UserSession.find({
    userName: userName
  }, (err, UserSession) => {
    if (err) {
      console.log('err 2:', err);
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }
    if (UserSession.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid length'
      });
    }

    const user = UserSession[0];
    if (!user.password === encryptedPass) {
      return res.send({
        success: false,
        message: 'Error: Invalid password'
      });
    }

    // Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }

      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      });
    });
  });

  const newUserSession = new UserSession({});

  newUserSession.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;