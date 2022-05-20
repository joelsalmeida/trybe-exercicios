import { EType, TVShow } from './TVShow';

class Serie extends TVShow {
  private _type: EType;

  private _seasons: number;

  private _episodesPerSeason :number;

  constructor(
    name: string,
    release: Date,
    seasons: number,
    episodesPerSeason: number,
  ) {
    super(name, release);

    this._type = EType.serie;
    this._seasons = seasons;
    this._episodesPerSeason = episodesPerSeason;
  }

  public get type() : string {
    return this._type;
  }

  public get seasons() : number {
    return this._seasons;
  }

  public get episodesPerSeason() : number {
    return this._episodesPerSeason;
  }

  public getResume(): string {
    return (
      `Name: ${this.name}
       Release year: ${this.release}
       Seasons: ${this._seasons} with ${this._episodesPerSeason} episodes.`
    );
  }
}

export default Serie;
