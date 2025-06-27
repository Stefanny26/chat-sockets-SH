module.exports = (req, res, next) => {
  try {
    if (req.cookies.username) {
      next();
    } else {
      // Puedes usar esto si solo manejas vistas:
      return res.redirect("/register");

      // O si prefieres delegar el error al middleware global (para APIs):
      // const err = new Error("Usuario no autenticado");
      // err.status = 401;
      // next(err);
    }
  } catch (err) {
    next(err); // Captura cualquier error inesperado (por ejemplo, en cookies)
  }
};
