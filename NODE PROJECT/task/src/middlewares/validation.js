const validate = require("../utils/courseValidation");

module.exports = (req, res, nxt) => {
  const data = req.body;
  const valid = validate(data);
  req.valid = valid;
  nxt();
};
