// script.js
var person = {
  firstName: "John",
  lastName: "Carr",
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var colors = ["red", "green", "blue"];
colors.push("yellow");

// Access and log data in the console
console.log("Person Object:");
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Full Name:", person.fullName());

console.log("\nFavorite Colors:");
colors.forEach(function(color) {
  console.log(color);
});

// Button click event
var displayButton = document.getElementById("displayButton");
var displayInfo = document.getElementById("displayInfo");

displayButton.addEventListener("click", function() {
  var favoriteColor = "blue"; // Replace with your favorite color
  var fullName = person.fullName();

  var message = "My favorite color is " + favoriteColor + " and my name is " + fullName + ".";
  displayInfo.textContent = message;
});

