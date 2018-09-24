var total;
var taxRate = 0.07;
var salesRate = 0.5;

function calcTotal ()
{
    var item1 = 6.5;
    var item2 = 1000;
    var item3 = 1000;
    var item4 = 200;

    var subtotal = item1 + item2 + item3 + item4;

    total = (subtotal * salesRate) + (subtotal *taxRate);
    document.getElementById("total").innerHTML = Math.round(total*100) / 100;
}
function submitInfo() {
	var nameinput = document.getElementById("nameinput");
    var emailinput = document.getElementById("emailinput");
    var addressinput = document.getElementById("addressinput");
    var cityinput = document.getElementById("cityinput");
    var stateinput = document.getElementById("stateinput");
	var cardName = document.getElementById("cardnameinput");
	var cardNum = document.getElementById("cardnuminput");
	var expMonth = document.getElementById("expmonthinput");
	var expYear = document.getElementById("expyearinput");
	var cvv = document.getElementById("cvvinput");
	(nameinput.value && emailinput && addressinput && cityinput && stateinput && cardName.value && cardNum.value && expMonth.value && expYear.value && cvv.value) ? alert("Thanks for your order!") : alert("Please fill in all form fields.");
}
document.getElementById("submit").addEventListener("click", submitInfo, false);
calcTotal();

function printCart2() {
    var finalPrice = 0;
  for(i = 0; i < cartAry.length; i++){
    var node = document.createElement("tr");
    var textItem = document.createTextNode(cartAry[i][0]);
    var textPrice = document.createTextNode(cartAry[i][1]);
    var item = document.createElement("td");
    var price = document.createElement("td");
    node.appendChild(item);
    node.appendChild(price);
    item.appendChild(textItem);
    price.appendChild(textPrice);
    document.getElementById("cartAryTbl").appendChild(node);
    finalPrice = finalPrice + cartAry[i][1];
  }
  var trhr = document.createElement("tr");
  var tdhr = document.createElement("td");
  var lineBreak = document.createElement("hr");
  trhr.appendChild(tdhr);
  tdhr.appendChild(lineBreak);

  var trTotal = document.createElement("tr");
  var tdTotal = document.createElement("td");
  var tdTotalPrice = document.createElement("td");
  var textItem = document.createTextNode("Total");
  var textPrice = document.createTextNode(finalPrice);
  trTotal.appendChild(tdTotal);
  tdTotal.appendChild(textItem);
  trTotal.appendChild(tdTotalPrice);
  tdTotalPrice.appendChild(textPrice);
  document.getElementById("cartAryTbl").appendChild(trhr);
  document.getElementById("cartAryTbl").appendChild(trTotal);
}
window.addEventListener("load", printCart2, true);
