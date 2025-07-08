const loginUser = async (req, res, next) => {
  try {
    const { email_id, password } = req.body;

    res.status(200).json({
      message: "Logged In Successfully",
      data: req.body,
    });
  } catch (error) {
    next(error);
  }
};

export { loginUser };
