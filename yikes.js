function getNewCar(){
var car =  {
   city: 'Toronto',
   passengers: 0,
   gas: 100
}
return car
}

var mustang = getNewCar()

function addCar(cars, newCar){
  cars.push(newCar)
 return 'Adding new car to fleet. Fleet size is now ' +cars.length;

}

var cars = []
console.log(addCar(cars, mustang));

function pickUpPassenger(car){
 car['passengers'] += 1
 car['gas'] -= 10
 return 'picked up passenger. Car now has ' +car['passengers'] + ' passengers'

}
console.log(pickUpPassenger(mustang));

function getDestination(car) {
  if (car['city'] == 'Toronto')
  {return 'Mississauga'}

  else if (['city'] == 'Mississauga') {
    return 'London'}

  else if (car['city']== 'London') {
    return 'Toronto'  }

}

console.log(getDestination(mustang));

function fillUpGas(car) {
  var oldGas = car['gas']
  car['gas'] = 100
  return 'Filled up to ' +getGasDisplay(car['gas'])+ ' on gas from ' +getGasDisplay(oldGas)

}

function getGasDisplay(gasAmount){
   return +gasAmount

}

console.log(fillUpGas(mustang));


function drive(car, cityDistance) {
  if (car['gas'] < cityDistance){
    return fillUpGas(car)
  }
  car['city'] = getDestination(car)
  car['gas'] -= cityDistance
  return 'Drove to ' +car['city'] + ' Remaining gas: ' +getGasDisplay(car['gas']) + ','

}
console.log(drive(mustang, 100));

function dropOffPassengers(car){
  var previousPassengers = car['passengers']
   car['passengers'] = 0
  return 'Dropped of ' +previousPassengers + ' passengers.'

}

console.log(dropOffPassengers(mustang));

function act(car) {
  distanceBetweenCities = 50
  if (car['gas'] < 20){
    fillUpGas(car)
  }
  else if (car['passengers'] <  3 ) {
    pickUpPassenger(car)

  }
  else {
    if (car['gas'] < distanceBetweenCities)
    {return fillUpGas(car)}
  }
  var droveTo = drive(car, distanceBetweenCities)
  var passengersDropped = dropOffPassengers(car)
  return droveTo +passengersDropped


}

console.log(act(mustang));


function commandFleet(cars) {
  for (var index = 0; index < cars.length; index++){
    var action = act(cars[index])
  console.log('Car' +  index + 1 +action);
}
return '___'
}



function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    var newCar = getNewCar
    console.log(addCar(cars, newCar));
    console.log(commandFleet(cars));

  }

}
console.log(addOneCarPerDay(cars, 10));
