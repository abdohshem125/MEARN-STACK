const Ajv = require("ajv");
const ajv = new Ajv();

const departmentSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      maxLength: 50,
    },
   
  },
  required: ["name"],
  additionalProperties: false,
};

const validateDepartment = ajv.compile(departmentSchema);
module.exports = validateDepartment;
