import crypto from 'crypto';
import Person from './person';

class Student extends Person {
  private _enrollment: string;

  private _examGrades: number[];

  private _workGrades: number[];

  constructor(name: string, birthDate: Date, examsGrades: number[], worksGrades: number[]) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
    this._examGrades = examsGrades;
    this._workGrades = worksGrades;
  }

  get enrollment() {
    return this._enrollment;
  }

  get examGrades() {
    return this._examGrades;
  }

  get workGrades() {
    return this._workGrades;
  }

  private generateEnrollment() {
    return crypto.randomUUID();
  }

  examGradesTotal() {
    return this._examGrades.reduce((acc, cur) => acc + cur);
  }

  examGradesMedia() {
    return this.examGradesTotal() / this.examGrades.length;
  }
}

export default Student;
