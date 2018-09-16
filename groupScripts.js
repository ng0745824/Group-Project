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

calcTotal();