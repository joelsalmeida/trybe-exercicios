import Vehicle from './vehicle';

class Airplane extends Vehicle {
  propellersNumber: number;

  constructor(name: string, airVehicle: boolean, propellersNumber: number) {
    super(name, airVehicle);

    this.propellersNumber = propellersNumber;
  }
}

export default Airplane;
