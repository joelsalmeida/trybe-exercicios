enum EType {
  movie = 'movie',
  serie = 'serie',
  documentary = 'documentary',
}

abstract class TVShow {
  private _name : string;

  private _release: Date;

  private _type: EType;

  constructor(name: string, release: Date, type: EType) {
    this._name = name;
    this._release = release;
    this._type = type;
  }

  public get name() : string {
    return this._name;
  }

  public get release() : Date {
    return this._release;
  }

  public get type() : EType {
    return this._type;
  }
}

export { TVShow, EType };
