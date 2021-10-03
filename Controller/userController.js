const User = require("./../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.saveUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user !== null) {
      return res.status(400).json({ message: "email already exists" });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const createdUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
    });

    const token = jwt.sign(
      { id: createdUser._id, role: createdUser.role, email: createdUser.email },
      "RETURN_DEV",
      {
        expiresIn: "2 days",
      }
    );

    res.status(200).send({ message: "created", token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(404).send({ message: "User does not exsist" });
    }

    const compare = await bcrypt.compare(req.body.password, user.password);
    if (compare === false) {
      return res.status(404).send({ message: "Wrong Email or Password" });
    }
    user.password = undefined;

    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      "RETURN_DEV",
      {
        expiresIn: "2 days",
      }
    );

    res.status(200).send({ message: "Logged in", user, token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
