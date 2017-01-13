'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
   'time' : diffDays(rentals[0].pickupDate, rentals[0].returnDate),

  'price' : calculPrice('time', cars, rentals[0].id),
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'time' : diffDays('pickupDate', 'returnDate'),

  'price' : calculPrice('time', cars, 'id'),
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'time' : diffDays('pickupDate', 'returnDate'),

  'price' : calculPrice('time', cars, 'id'),
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
/*
function timeTotal(rentals){
var diffDaysPerPerson = [];
for(int i = 0; i < rentals.length; i++){
  r = rentals[i].returnDate;
  p = rentals[i].pickupDate;
  var date1 = new Date(p);
  var date2 = new Date(r);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  diffDaysPerPerson.push(diffDays);
}
  return diffDaysPerPerson;
}
*/
/*
function diffDays(rentals, i){
  r = rentals[i].returnDate;
  p = rentals[i].pickupDate;
  var date1 = new Date(p);
  var date2 = new Date(r);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return diffDays;
}
*/
function diffDays(p, r){  
  var date1 = new Date(p);
  var date2 = new Date(r);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return diffDays;
}
/*
function calculPrice(cars ,rentals, ){
  allPrice = [];
  for(int i = 0; i < rentals.length; i++){
    
    if(cars[i].id == rentals[i].carId)
    {
      time = diffDays(rentals, i);
      priceDays = time * cars[i].pricePerDay;
      distanceTotal = rentals[i].distance * cars[i].pricePerKm;
      price = distanceTotal + priceDays;
      allPrice.push(price);
    }
  }
}

function calculPrice(cars ,rentals, i){
  allPrice = [];
      
    if(cars[i].id == rentals[i].carId)
    {
      time = diffDays(rentals, i);
      priceDays = time * cars[i].pricePerDay;
      distanceTotal = rentals[i].distance * cars[i].pricePerKm;
      price = distanceTotal + priceDays;
      allPrice.push(price);
    }
    for( i = 0; i < rentals.length; i++ ){
      if(cars[0].id == rentals[i].carId){
      time = diffDays(rentals, i);
      priceDays = time * cars[i].pricePerDay;
      distanceTotal = rentals[i].distance * cars[i].pricePerKm;
      price = distanceTotal + priceDays;
      }
    }
  return price;
}
*/
function calculPrice(time ,cars, rentals){ 
      for(i = 0; i < cars.length ; i++){       
          if(cars[i].id == rentals){
          priceDays = time * cars[i].pricePerDay;
          distanceTotal = rentals.distance * cars[i].pricePerKm;
          price = distanceTotal + priceDays; 
          
        }
      }
         
  
  return price;
}