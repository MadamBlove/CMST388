/*
		Your Name: <Raven Pressley>
		Last Modified Date: <05/04/2023>
		File: event_registration.js
		File Description: <The purpose of this file is to make the web page functional. As well as this file is used to to validate and make the hmtl file use the functions that were put on it. When using a javascript file it is essential tio make sure that the hmtl file and css files are linked>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

setTimeout(function() { alert("Your Session has timed out"); }, 600000);

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var ticketError = document.getElementById('ticket-error');

// This code is to use a countdown function of the web page
const startingMiuntes = 10;
let time = startingMiuntes * 60;

const countdownEl = document.getElementById('transactionTimer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time --;
}

$(document).ready(function(){
	$(".checkout").on("keyup", ".quantity", function(){
		var price = +$(".price").data("price");
		var quantity = +$(this).val();
		$("#total").text("$" + price * quantity);
	})
})



// this is used to make the ticket numbers valid and can only add up to 3
function validateTickets(){
  var ticket = document.getElementById('numTickets').value;

  if (ticket.length == 0){
      ticketError.innerHTML = 'Number of tickets is required' 
      return false;
}

if (ticket.length < 3){
  ticketError.innerHTML = 'only three tickets can be purchased at a time' 
  return false;
}

  if (!ticket.match(/^[0-9]{10}$/)){
  ticketError.innerHTML = 'only numbers'
  return false;
}

  ticketError.innerHTML = 'good';
  return true;

}



// validate the contant information
function validateName(){
  var name = document.getElementById('contact-name').value;
  if(name.length == 0){
      nameError.innerHTML = 'Name is reqiured';
      return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = 'Write full name';
      return false;
  }
  
  nameError.innerHTML = 'good';
  return true;
}

function validateEmail(){
var email = document.getElementById('contact-email').value;
  
  if(email.length == 0){
      emailError.innerHTML = 'Email is required'
      return false;
  }

  if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = 'Email invalid'
      return false;
  }

  emailError.innerHTML = '<good>';
  return true;

}


let btnReset = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnReset.addEventListener('click', () =>{
  inputs.forEach(input => input.value = '');
});

// Use the submit function and complete purchase
function completePurchase() {
	return confirm('Is the what you are ordering?');
  }

  document.getElementById("submit").onsubmit = function() {myFunction()};

  function myFunction() {
	alert("Your Purchase was complete");
  }

