// Initialize variables
let initial = 0;
let final = 0;
let tip = 0;

// Grab form and input
const form = document.querySelector("form");       
const amountInput = document.getElementById("amount"); 

// Submit form to get initial value
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  initial = parseFloat(amountInput.value) || 0;
  console.log("Initial amount entered:", initial);
});

// Grab tip buttons
const t15 = document.getElementById("t15");
const t20 = document.getElementById("t20");
const t25 = document.getElementById("t25");

// Add click events to buttons
t15.addEventListener("click", () => calculateTip(15));
t20.addEventListener("click", () => calculateTip(20));
t25.addEventListener("click", () => calculateTip(25));
//custom tip button
const customEnter = document.getElementById("custom-enter");       
const customInput = document.getElementById("custom"); 

customEnter.addEventListener("click", function(event) {
  event.preventDefault(); 
  const customPercentage = parseFloat(customInput.value) || 0;
  calculateTip(customPercentage);
});



// Calculate tip
function calculateTip(percentage) {
  final = initial * (1 + percentage / 100);
  tip = final - initial;

  document.getElementById("tip-amount").innerText = "Tip Amount: $" + tip.toFixed(2);
}
