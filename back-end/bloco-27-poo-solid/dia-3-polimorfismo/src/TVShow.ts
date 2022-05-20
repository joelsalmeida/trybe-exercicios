enum EType {
  movie = 'movie',
  serie = 'serie',
  documentary = 'documentary',
}

abstract class TVShow {
  private _name : string;

  private _release: Date;

  constructor(name: string, release: Date) {
    this._name = name;
    this._release = release;
  }

  public get name() : string {
    return this._name;
  }

  public get release() : Date {
    return this._release;
  }

  public getResume(): string {
    return (
      `Name: ${this._name}
       Release: ${this._release}.`
    );
  }
}

export { TVShow, EType };
