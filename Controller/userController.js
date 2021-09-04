const User = require("./../Model/userModel");
const bcrypt = require("bcrypt");

exports.saveUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    res.status(200).send({ message: "created" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
