const Ajv = require("ajv");
const ajv = new Ajv();

const studentSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      pattern: "^[a-zA-Z ]+$",
      minLength: 3,
      maxLength: 30,
    },
    age: {
      type: "number",
      minimum: 16,
      maximum: 100,
    },
    dept_id: {
      type: "number",
    },
    courses: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
    },
  },
  required: ["name", "age", "department", "courses"],
  additionalProperties: false,
};

const validateStudent = ajv.compile(studentSchema);
module.exports = validateStudent;
