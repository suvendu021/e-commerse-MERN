const AsyncHandler = (fun) => async (req, res, next) => {
  try {
    return await fun(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      error: error.message || "internal server error",
    });
  }
};

export { AsyncHandler };
