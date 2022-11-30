// import jwt from "jsonwebtoken";
const jwt =require("jsonwebtoken")

const generateToken = (id) => {
  return jwt.sign({ id },"HELOAMMO", { 
    expiresIn: "50d",
  });
};

module.exports= generateToken;