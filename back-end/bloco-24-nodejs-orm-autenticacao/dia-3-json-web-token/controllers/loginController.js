const { JWT_SECRET } = process.env;

const loginController = (req, res) => {
  const { username } = req.body;

  const payload = {
    username,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};

module.exports = { loginController };
