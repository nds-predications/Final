// // Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(data);

var data = d3.json('/model_1415')
.then(function(data) { 
  console.log(data);
})

// data.forEach(function(data) {
//     console.log(data);
//     var row = tbody.append("a href");

//     Object.entries(data).forEach(function([key, value]) {
//         console.log(key, value);
//       });
//     }); 

// Get the modal
var modal = document.getElementById('myModal');

object.addEventListener("mouseover", myScript); 
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.hover = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.hover = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.hover = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}