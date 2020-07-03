 function Car(make,model,colour,price,regisNum,profilePic){
  this.make = make;
  this.model =model;
  this.colour = colour;
  this.price = price;
  this.regisNum = regisNum;
  this.imageSrc = profilePic;
  this.toString = function () {
    return this.make + " is " + this.model + " model " + this.colour + " in colour " + " it cost " + this.price + " and its registration Number is " + this.regisNum;
  };
}



var bmw = new Car(
      "BMW",
      2016,
      "Brown",
      "R480 000",
      "M LP 1290",
      "images/BMW-i3_ModelCard.png"
  );
var volkswagen = new Car(
      "VW",
      2017,
      "Black",
      "R250 000",
      "Dark Label",
      "images/Amarok.png"
  );

var landRover = new Car(
      "LandRover",
      2016,
      "Black",
      "R160 400",
      "CA 6667",
      "images/LAND ROVER.png"
  );
var mercedes = new Car(
      "Benz",
      2014,
      "white",
      "R340 700",
      "JAMBINNO",
      "images/MERC Glass.png"
  );

var volvo = new Car(
      "Volvo",
      2018,
      "Silver",
      "R230 110",
      "CA 2435",
      "images/Volvo.png"
  );

let arrayOfVehicles = [bmw,volkswagen,landRover,mercedes,volvo];

var loaded = {};

loaded.addVehicles = function(){
  arrayOfVehicles.forEach(function(car){
    let div = document.getElementById("details");
    let imgProfile = document.createElement("img");
    imgProfile.src = car.imageSrc;
    imgProfile.alt = car.make + " " + car.model;
    imgProfile.style.height = "200px";
    imgProfile.style.width = "300px";

    let btnToString = document.createElement("button");
    btnToString.innerHTML = "details";

    btnToString.addEventListener("click", function(e){
      car.toString();
    });
        btnMore = document.createElement("button");
        btnMore.innerHTML = "Shomore";

        car.more = function(){
          alert(
            " Its " +
               this.make +
               " model " +
               this.model +
               " and its colour is  " +
               this.colour + 
               " it cost " +
               this.price +
               " and the registration Number is " +
               this.regisNum +
               " "
            );
        };

        btnMore.addEventListener("click", function(e){
          car.more();
        });

        let lineBreak = document.createElement("br");


        div.appendChild(imgProfile);
        div.appendChild(btnMore);
        div.appendChild(btnToString);
        div.appendChild(lineBreak);
  });
};
loaded.addVehicles();

console.log(bmw.toString());
console.log(volkswagen.toString());
console.log(landRover.toString());
console.log(mercedes.toString());
console.log(volvo.toString());

