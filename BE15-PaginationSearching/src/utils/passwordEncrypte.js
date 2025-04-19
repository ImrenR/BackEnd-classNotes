// Password Encryption:
const crypto = require('node:crypto'); // import crypto module

module.exports = (password)=> {
  

     const salt=process.env.PASS_SALT; // salt is an environment variable
     const iteration= parseInt(process.env.PASS_ITERATION); // iteration is an environment variable
     const keylen= parseInt(process.env.PASS_KEYLEN); // heylen is an environment variable
     const digest= process.env.PASS_DIGEST; // digest is an environment variable

// require('crypto').randomBytes(32).toString('hex')
  return crypto.pbkdf2Sync(password,salt,iteration,keylen,digest).toString('hex');
};