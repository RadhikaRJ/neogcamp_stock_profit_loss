var unitPrice = document.getElementById("CP-unit");
var qty = document.getElementById("qty");
var todayprice = document.getElementById("current-CP");
var outputref = document.querySelector("#output");
var btnref = document.querySelector("#submit");

btnref.addEventListener("click", clickEventHandler);

function clickEventHandler() {
    var unitp = unitPrice.value;
    var qty_purchased = qty.value;
    var latestPrice = todayprice.value;
    if (unitp == '' || qty_purchased == '' || latestPrice == '') {
        alert("Invalid/Missing input!");
    } else {
        var investedAmount = unitp * qty_purchased;
        var todayreturns = qty_purchased * latestPrice;
        if (todayreturns > investedAmount) {
            outputref.style.color = "green";
            outputref.innerText = "Congratulations!!\nYou have made a profit of " + (((todayreturns - investedAmount) / investedAmount) * 100) + "%";
        } 
        else if(investedAmount==todayreturns){
            outputref.style.color = "black";
            outputref.innerText = "Neither Profit nor Loss. Change is " + (((investedAmount - todayreturns) / investedAmount) * 100) + "%";
        }
        else 
        {
            outputref.style.color = "red";
            outputref.innerText = "Oops! You've incurred a loss of " + (((investedAmount - todayreturns) / investedAmount) * 100) + "%";
        }
    }

}