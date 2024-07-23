function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  const scooter1 = new Scooter(2021, 'red', 'Honda');
const scooter2 = new Scooter(2022, 'blue', 'Yamaha');

const driver1 = new Driver('John Doe', 30, 5);
const driver2 = new Driver('Jane Smith', 28, 3);

const pickupLocation1 = new PickupLocation('123 Elm St', 'Springfield');
const pickupLocation2 = new PickupLocation('456 Oak St', 'Shelbyville');

console.log(scooter1);
console.log(scooter2);
console.log(driver1);
console.log(driver2);
console.log(pickupLocation1);
console.log(pickupLocation2);
