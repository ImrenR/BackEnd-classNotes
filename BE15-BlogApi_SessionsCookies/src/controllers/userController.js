"useStrtict";

const User = require("../models/user.model");
const passwordEncrypte = require("../utils/passwordEncrypte");
module.exports = {
  list: async (req, res) => {
    const result = await User.find();
    res.status(200).send({
      error: false,
      result,
    });
  },
  create: async (req, res) => {
    const result = await User.create(req.body);
    res.status(200).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    const result = await User.findById(req.params.id);
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    const result = await User.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send({
      error: false,
      result,
    });
  },
  delete: async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      result,
    });
  },
  login: async (req, res) => {
    // const email= req.body.email
    // const password= req.body.password
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });
      if (user) {
        if (user.password === passwordEncrypte(password)) {

          //Session
          // req.session = {
          //   email: User.email,
          //   _id:User._id
          // }
          req.session._id = user._id
          req.session.email= user.email
          if(req.body?.rememberMe == true){
            req.session.rememberMe=true,
            req.sessionOptions.maxAge= 1000 * 60 * 60 * 24 * 3
          }
          res.status(200).send({
            error: false,
            message: "Login is succesful.",
          });
        } else {
          res.customErrorCode = 401;
          throw new Error("Wrong email or password");
        }
      } else {
        res.customErrorCode = 401;
        throw new Error("Wrong email or password");
      }
    } else {
      res.customErrorCode = 401;
      throw new Error("Email or password are required");
    }
  },
};
