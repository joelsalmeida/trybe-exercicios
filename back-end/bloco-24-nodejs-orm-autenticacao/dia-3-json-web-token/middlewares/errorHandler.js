const errorHandler = (error, _req, res, next) => {
  if (error.isJoi) {
    const { message } = error.details[0];
    res.status(404).json({ message });
  }
  next();
};

module.exports = { errorHandler };
