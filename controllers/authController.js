import userModel from "../models/userModel.js";

export const registerController = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;
    //validate
    if (!name) {
        res.send({message:"email?"})
    //  next("name ?");
    }
    if (!email) {
      
        next("email ?");

    }
    if (!password) {
      
        next("password ?");

    }
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
        res.status(409).send({
          message: "Email Already Registered. Please Login",
          success: false,
        });
        return; // Add a return statement to exit the function after sending the response
      }
    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      success: true,
      message: "Created",
      user,
    });
  } catch (error) {
    console.log("error");
    // next(error)
  }
};
