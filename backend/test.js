const admin = require('./database').admin;

admin.auth().createCustomToken('some-uid')
  .then((token) => {
    console.log(token);

  })
