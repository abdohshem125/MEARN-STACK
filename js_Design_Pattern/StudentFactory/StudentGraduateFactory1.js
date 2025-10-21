import StudentFactory from "./StudentFactory.js";
import GraduateStudents1 from "../Students/GraduateStudents1.js";
import GraduateStudents2 from "../Students/GraduateStudents2.js";

export default class StudentGraduateFactory1 extends StudentFactory {
  graduate1() {
    return new GraduateStudents1();
  }
  graduate2() {
    return new GraduateStudents2();
  }
}
