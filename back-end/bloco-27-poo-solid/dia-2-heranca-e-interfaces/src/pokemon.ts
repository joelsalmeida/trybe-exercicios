interface IPokemon {
  name: string;
  type: string;
  attack: number;
  defense: number;
}

export enum PokeTypes {
  plant = 'plant',
  electric = 'electric',
  water = 'water',
}

class Pokemon implements IPokemon {
  name: string;

  type: PokeTypes;

  attack: number;

  defense: number;

  constructor(name: string, type: PokeTypes, attack: number, defense: number) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
  }
}

export default Pokemon;
