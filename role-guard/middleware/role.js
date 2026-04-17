function checkRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.send("Access denied: Only " + role);
    }
    next();
  };
}

module.exports = checkRole;