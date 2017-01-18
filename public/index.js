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
<<<<<<< HEAD
  'distance': 100,   

  'price' : 0,
=======
  'distance': 100,
   'time' : diffDays(rentals[0].pickupDate, rentals[0].returnDate),

  'price' : calculPrice('time', cars, rentals[0].id),
>>>>>>> f9e79b5ecf82f415ed533c16c32047ead191c028
  'options': {
    'deductibleReduction': false
  },  
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
<<<<<<< HEAD
  

  'price' : 0,
=======
  'time' : diffDays('pickupDate', 'returnDate'),

  'price' : calculPrice('time', cars, 'id'),
>>>>>>> f9e79b5ecf82f415ed533c16c32047ead191c028
  'options': {
    'deductibleReduction': true
  },  
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
<<<<<<< HEAD
  
    'price' : 0,
 // 'price' : mainExercice1(cars, rentals, "p-boxster"),
=======
  'time' : diffDays('pickupDate', 'returnDate'),

  'price' : calculPrice('time', cars, 'id'),
>>>>>>> f9e79b5ecf82f415ed533c16c32047ead191c028
  'options': {
    'deductibleReduction': true
  },  
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
<<<<<<< HEAD

function calculNbDays(thisPickupDate,thisReturnDate){
  var date1 = new Date(thisPickupDate);
  var date2 = new Date(thisReturnDate);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var nbDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  console.log(nbDays);
  return nbDays;
}

function calculPriceDays(nbDays,thisPricePerDay){
  console.log(nbDays * thisPricePerDay);
  return nbDays * thisPricePerDay;
}

function calculPriceDistance(thisCarPricePerKm, thisCarRentalsDistance){
  console.log(thisCarPricePerKm*thisCarRentalsDistance);
  return thisCarPricePerKm*thisCarRentalsDistance;
}


function returnPercentage(nbDays)
{
  var oneDay = 1;
  var fourDays = 4;
  var tenDays = 10;
  var percentage;
  if((nbDays > oneDay)&&(nbDays < fourDays ))
  {
      percentage = 0.1;
  }
  if((nbDays > fourDays)&&(nbDays < tenDays ))
  {
      percentage = 0.3;
  }
  if(nbDays > tenDays)
  {
      percentage = 0.5;
  }
  if(nbDays < oneDay)
  {
      percentage = 1;
  }
  return percentage;
}


function Exercice5(rentals, cars, actors){
  Exercice2(rentals, cars, actors); // to obtain the reduction
  for(var i = 0; i < actors.length ; i++)
  {
    for(var j = 0; j < rentals.length ; j++)
    {
    if(rentals[j].id == actors[i].rentalId)
    {
      console.log("taille :" + actors[i].payment.length);
        for(var k = 0; k < actors[i].payment.length; k++){
          if(actors[i].payment[k].who == "driver"){
              actors[i].payment[k].amount = rentals[j].price;
          }
          if(actors[i].payment[k].who == "owner"){
              actors[i].payment[k].amount = rentals[j].price - rentals[j].price * 2;
          }
          if(actors[i].payment[k].who == "insurance"){
              actors[i].payment[k].amount = rentals[j].insurance;
          }
          if(actors[i].payment[k].who == "assistance"){
              actors[i].payment[k].amount = rentals[j].assistance;
          }
          if(actors[i].payment[k].who == "drivy"){
              actors[i].payment[k].amount = rentals[j].assistance;
          }
        }
    }
    }
  }  
}
//Exercice5(rentals, cars, actors);

function Exercice3(rentals, cars)
{  
  
  for( i = 0; i < cars.length ; i++)
  {
    for( j = 0; j < rentals.length ; j++)
    {
    if(rentals[j].carId == cars[i].id)
    {
      var price = rentals[j].price;
      var comission = price * 0.3;
       rentals[j].insurance = comission / 2;

       var nbDays = calculNbDays(rentals[index].pickupDate,rentals[index].returnDate);
       rentals[j].roadside = nbDays;
       rentals[j].drivy = (rentals[j].drivy * 2) - (rentals[j].insurance + rentals[j].roadside);
       //rentals[j].comission = insurance * 2;
    }
    }
  }  
}




function Exercice4(rentals, cars){   
  
  for(var i = 0; i < cars.length ; i++)
  {
    for(var j = 0; j < rentals.length ; j++)
    {
    if(rentals[j].carId == cars[i].id)
    {
      if(rentals[j].deductibleReduction == true)
      {          
          var nbDays = calculNbDays(rentals[index].pickupDate,rentals[index].returnDate);
          var chargeAdditional = nbDays * 4;
          var priceDays = calculPriceDays(chargeAdditional,cars[i].pricePerDay);
          var priceDistance = calculPriceDistance(rentals[index].distance, cars[i].pricePerKm);
          rentals[j].price = priceDays + priceDistance;      
      }
     
    }
  }
}

}

function Exercice1(rentals, cars){
  var price = 0;
   for(var i = 0; i < cars.length ; i++){
    for(var j = 0; j < rentals.length ; j++){
        if(rentals[j].carId == cars[i].id)
        {
      var nbDays = calculNbDays(rentals[j].pickupDate,rentals[j].returnDate);
      var priceDays = calculPriceDays(nbDays,cars[i].pricePerDay);
      var priceDistance = calculPriceDistance(rentals[j].distance, cars[i].pricePerKm);
      price = priceDays + priceDistance;
      rentals[j].price = price;
      console.log("price" + j + " : "+ rentals[j].price);
        }
    }
   }
}


function Exercice2(rentals, cars)
{     
   for(var i = 0; i < cars.length ; i++){
    for(var j = 0; j < rentals.length ; j++){
        if(rentals[j].carId == cars[i].id)
        {
          var nbDays = calculNbDays(rentals[j].pickupDate,rentals[j].returnDate);         
          var percentage = returnPercentage(nbDays);
          rentals[j].price = rentals[j].price * percentage;
        }
    }
   }
}


Exercice1(rentals, cars);




/*


function mainExercice2(cars, rentals, thisIdRental)
{  
  var price = 0;
  var index =getPositionIndexOfRentals(thisIdRental, rentals);

  for( i = 0; i < cars.length ; i++)
  {
    if(rentals[index].carId == cars[i].id)
    {
      price = mainExercice1(cars, rentals, thisIdRental);
      var nbDays = calculNbDays(rentals[index].pickupDate,rentals[index].returnDate);
      var percentage = returnPercentage(nbDays);
      price = price * percentage;
    }
  }
  return price;
}

function getPositionIndexOfRentals(thisIdRental, rentals){
  for( i = 0; i < rentals.length ; i++){
    if(thisIdRental == rentals[i].carId){
      return i;
    }
  }
}

function mainExercice1(cars, rentals, thisIdRental){
  var index =getPositionIndexOfRentals(thisIdRental, rentals);
  var price = 0;
  for( i = 0; i < cars.length ; i++){
    if(rentals[index].carId == cars[i].id){
      var nbDays = calculNbDays(rentals[index].pickupDate,rentals[index].returnDate);
      var priceDays = calculPriceDays(nbDays,cars[i].pricePerDay);
      var priceDistance = calculPriceDistance(rentals[index].distance, cars[i].pricePerKm);
      price = priceDays + priceDistance;
    }
  }
  return price;
}

function roadsideExercice3(cars, rentals){ 
  
  for( i = 0; i < cars.length ; i++){
    if(rentals[index].carId == cars[i].id){
      var nbDays = calculNbDays(rentals[index].pickupDate,rentals[index].returnDate);
       roadside = nbDays;
    }
  }
  return roadside;
}

function drivyExecice3(cars, rentals){
  var roadside = roadsideExercice3(cars, rentals, thisIdRental);
  var insurance  = insuranceExercice3(cars, rentals, thisIdRental);
  var comission = insurance * 2;
  return comission - (roadside + insurance);
=======
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