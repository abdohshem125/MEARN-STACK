import StudentFactory from "./StudentFactory.js";
import SeniorStudent1 from "../Students/SeniorStudent1.js";
import SeniorStudent2 from "../Students/SeniorStudent2.js";

export default class StudentSeniorFactory1 extends StudentFactory {
  Senior1() {
    return new SeniorStudent1();
  }
  Senior2() {
    return new SeniorStudent2();
  }
}
