var userchema = require('../models/user')


exports.findUser = async function(req, res) {
  
const datauser = await userchema.find();
return datauser;

};