class Person {
  private _name: string;

  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validateName(name);

    this._name = name;
    this._birthDate = birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3) throw new Error('O nome deve ter no mínimo três caracteres');
  }

  get name() : string {
    return this._name;
  }

  set name(name : string) {
    this.validateName(name);

    this._name = name;
  }

  get birthDate() : Date {
    return this._birthDate;
  }

  set birthDate(birthDate : Date) {
    this._birthDate = birthDate;
  }
}

export default Person;
