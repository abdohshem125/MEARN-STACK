const Ajv = require("ajv");
const ajv = new Ajv();

const courseSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    credits: {
      type: "number",
      minimum: 1,
      maximum: 6,
    },
    department: {
      type: "string", 

    },
    students: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
    },
  },
  required: ["title", "credits", "department"],
  additionalProperties: false,
};

const validateCourse = ajv.compile(courseSchema);
module.exports = validateCourse;
