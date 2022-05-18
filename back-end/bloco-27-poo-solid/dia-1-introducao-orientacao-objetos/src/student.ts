class Student {
  private _name: string;

  private _enrollment: number;

  private _examGrades: number[];

  private _exerciseNotes: number[];

  constructor(name: string, enrollment: number, examGrades: number[], exerciseNotes: number[]) {
    this._name = name;
    this._enrollment = enrollment;
    this._examGrades = examGrades;
    this._exerciseNotes = exerciseNotes;
  }

  get name() {
    return this._name
  }

  get enrollment() {
    return this._enrollment
  }

  get examGrades() {
    return this._examGrades
  }

  get exerciseNotes() {
    return this._exerciseNotes
  }

  examGradesTotal() {
    return this._examGrades.reduce((acc, cur) => acc + cur);
  }

  examGradesMedia() {
    return this.examGradesTotal() / 4;
  }
}

export default Student;
