const firebase = require('../database').firebase;
const admin = require('../database').admin;
const db = require('../database').db;
const jwt = require('jsonwebtoken');
const secret = 'hetighatkofngepla.g/ftkgmvyepalgbxkfabf..dhekabncvkahardik@Singhisawesome';


exports.Signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {

    let user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(() => console.log('Name added')).catch(() => console.log('Error Occured'));

    user = firebase.auth().currentUser;
    let newUser = prepareUser(user);

    const jwtToken = generateJwtToken(newUser.uid);
    res.status(200).json({...newUser,token: jwtToken});

  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('Signup Error '+errorMessage);
    res.status(400).send(errorMessage);
  });

}

exports.Login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    var user = firebase.auth().currentUser;

      let newUser = prepareUser(user);
      const jwtToken = generateJwtToken(newUser.uid);
      res.status(200).json({...newUser,token: jwtToken});

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    res.status(400).send(errorMessage);

  });
}

exports.sendEmailVerificationLink = (req, res, next) => {

  let user = firebase.auth().currentUser;
  console.log(user);

    user.sendEmailVerification().then(() => {
      console.log('Email sent.');
    }).catch((error) => {
      // An error happened.
      console.log(error);

      res.send(error.message);
    });
}

exports.verifyEmail = (req, res, next) => {
  const apiKey  = req.body.apiKey;
  const oobCode = req.body.oobCode;
  const mode = req.body.mode;
  const lang = req.body.lang;

  firebase.auth().applyActionCode(oobCode).then(() => {
    console.log('Email Veirfied');
    res.status(200).json({verificationStatus:true});
  }).catch(function(error) {
    // Code is invalid or expired. Ask the user to verify their email address
    // again.
    res.status(200).json({verificationStatus:false});
  });

}

exports.autoLogin = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, secret, (err, decodedToken) => {
    if(err){
      console.log(err);
      res.send(null);
    }else{
      console.log(decodedToken);
      admin.auth().createCustomToken(decodedToken.uid).then(customToken => {
        firebase.auth().signInWithCustomToken(customToken).then(user => {
          const newUser = prepareUser(user.user);
          res.status(200).json(newUser);
        }).catch(err => {
          res.send(err.message);
        });
      })
    }
  });
}

exports.logout = (req, res, next) => {
  firebase.auth().signOut();
}

prepareUser = (user) => {
  user = user;
  const newUser = {
    name: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    uid: user.uid
  }
  return newUser;
}

// getSessionCookie = (idToken,res) => {
//   const expiresIn = 60 * 60 * 24 * 5 * 1000;
//   admin.auth().createSessionCookie(idToken, {expiresIn})
//     .then((sessionCookie) => {
//      const options = {maxAge: expiresIn, httpOnly: true, secure: true, withCredentials: true };
//      res.cookie('session', sessionCookie, options);
//      res.end(JSON.stringify({status: 'success'}));
//     }).catch(error => {
//       res.status(400).send(error.errorInfo.message)
//     });
// }

exports.getUser = (req, res, next) =>{
  let userData;
  const user = firebase.auth().currentUser;
  if(!user){
    userData = null
  }else{
    userData = prepareUser(user);
  }
  res.status(200).json(userData);
}

generateJwtToken = (uid) => {
  return jwt.sign({uid: uid},secret,{expiresIn:'30 days'});
}
