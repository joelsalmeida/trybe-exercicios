import { EType, TVShow } from './TVShow';

class Movie extends TVShow {
  private _type: EType;

  private _durationInMinutes: number;

  constructor(name: string, release: Date, durationInMinutes: number) {
    super(name, release);

    this._type = EType.movie;
    this._durationInMinutes = durationInMinutes;
  }

  public get type() : string {
    return this._type;
  }

  public get durationInMinutes() : number {
    return this._durationInMinutes;
  }

  public getResume(): string {
    return (
      `Name: ${this.name}
       Release year: ${this.release}
       Duration: ${this._durationInMinutes} min.`
    );
  }
}

export default Movie;
