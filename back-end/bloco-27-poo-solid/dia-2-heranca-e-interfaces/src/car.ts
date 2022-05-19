import Vehicle from './vehicle';

class Car extends Vehicle {
  numberOfWheels: number;

  constructor(name: string, airVehicle: boolean, numberOfWheels: number) {
    super(name, airVehicle);

    this.numberOfWheels = numberOfWheels;
  }
}

export default Car;
