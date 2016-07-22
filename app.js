$(document).ready(function(){

var claim1 = new Claim("John Doe", "Specialist", 1100);
var claim2 = new Claim("Jane Doe", "Optical", 100);
var claim3 = new Claim("Joe Johnson", "Emergency", 31000);
var claim4 = new Claim("Sharon Smith", "Emergency", 1300);
var claim5 = new Claim("Steve Wright", "Primary Care", 770);
var claim6 = new Claim("Fred Astaire", "Specialist", 1675);
var claim7 = new Claim("Ginger Rogers", "Emergency", 6246);
var claim8 = new Claim("Gene Kelly", "Optical", 634);
var claim9 = new Claim("Cyd Charisse ", "Optical", 12463);
var claim10 = new Claim("Debbie Reynolds", "Primary Care", 247);

var initialList = [claim1, claim2, claim3, claim4, claim5];

var newList = [claim6, claim7, claim8, claim9, claim10];

var totalList = initialList.concat(newList);

var totalPaidOut = 0;

/* New Combined Array: var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10];*/

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}


function calcPercent(claim){
  var temp = 0;
  var tempClaim = claim.visitType.toLowerCase();

  switch(tempClaim){
    case 'optical':
    temp = 0;
    break;
    case 'specialist':
    temp = 10;
    break;
    case 'emergency':
    temp = 100;
    break;
    case 'primary care':
    temp = 50;
    break;
  }
  return temp;
}
//function to determine amount covered
function calcAmount(claim, percent, totalPaidOut){
  var tempAmount = claim.visitCost * (percent/100);
  totalPaidOut += tempAmount;
  return tempAmount.toLocaleString('en-us', {style: 'currency', currency: 'USD'});
}

for(var i = 0; i < totalList.length; i++){
  var percent = 0;
  var paid = 0;
  percent = calcPercent(totalList[i]);
  paid = calcAmount(totalList[i], percent, totalPaidOut);
  console.log(paid + " for " + totalList[i].patientName);
}
console.log("Total paid out: " + totalPaidOut);
});
