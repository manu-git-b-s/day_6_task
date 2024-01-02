class Uber {
  constructor(carModel, carType, color, registrationNumber) {
    this.carModel = carModel;
    this.carType = carType;
    this.color = color;
    this.registrationNumber = this.registrationNumber;
  }

  getPrice(distance, demandPrice, pricePerKm) {
    return pricePerKm * distance * demandPrice;
  }
}

const myCar = new Uber("Ertiga", "Sedan", "Brown", 4975);
console.log(myCar.getPrice(13, 2, 20));
