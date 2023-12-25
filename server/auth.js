const jwt = require("jsonwebtoken")
const secretKey = "secretKey";
module.exports.generateTonken = function(payload){
    const token = "Bearer" + jwt.sign(payload ,secretKey,{expiresIn:"7d",});
    return token
};