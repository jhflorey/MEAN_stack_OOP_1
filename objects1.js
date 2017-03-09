// We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:

// Step 1: Each vehicle should have a makeNoise method 


function vehicleConstructor(name, wheels, numberPassengers){

	var vehicle = {};

	vehicle.name = name || "unicycle";
	vehicle.wheels = wheels || 1;
	vehicle.numberPassengers = numberPassengers || 1;


	vehicle.introduce = function(){
		console.log("Hi I am a " + vehicle.name + ". I have " + vehicle.wheels + " wheels" + ", and I can carry " + vehicle.numberPassengers + " people");
	}


	vehicle.makeNoise = function(noise){
		var noise = noise || "pip pip"; 
		console.log(noise);
	}

	return vehicle;

}
var unicyle = vehicleConstructor();
unicyle.introduce();
unicyle.makeNoise();

// Step 2: Using the constructor, create a Bike 

var bike = vehicleConstructor("bicycle", 2, 1);
bike.introduce();


// Step 3: Redefine the Bike’s makeNoise method to print “ring ring!” 

var bike = vehicleConstructor("bicycle", 2, 1);
bike.makeNoise = function(){
	console.log("ring, ring");
}
// bike.introduce();
bike.makeNoise();


// Step 4: Create a Sedan 


var sedan = vehicleConstructor("sedan", 4, 4);
sedan.introduce();


// Step 5: Redefine the Sedan’s makeNoise method to print “Honk Honk!” 

var sedan = vehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
	console.log("Honk Honk!");
}
sedan.makeNoise();



// Step 6: Using the constructor, create a Bus 
// Step 7: Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​


var bus = vehicleConstructor("bus", 8, 2);
bus.pickupPassengers = function(newPassengers){
	bus.numberPassengers += newPassengers;
}
bus.introduce();
console.log(bus.numberPassengers);
bus.pickupPassengers(8);
console.log(bus.numberPassengers);













































