//call variables
var addButton = document.getElementById("add-button");
var balance  = document.getElementById("balance");
var income = document.getElementById("income");
var expence = document.getElementById("expense");
var errorMess = document.getElementById("error");
var category = document.getElementById("category");
var foodCard = document.getElementById("food");
var fuelCard = document.getElementById("fuel");
var careCard = document.getElementById("care");
var rentCard = document.getElementById("rent");
var otherCard = document.getElementById("other");
var notification = document.getElementById("notification");
var foodValue = 0;
var fuelValue = 0;
var careValue = 0;
var rentValue = 0;
var otherValue = 0;
var balanceValue = 0;
var incomeValue = 0;
var expenceValue = 0;
var recentTransaction = [];

function date(){
    var dateBox = document.getElementById("date");
    var date = new Date();
    var today = date.getUTCFullYear();
    dateBox.innerHTML = `<p>${today}</p>`;
}

function loadUserName(){
     var username = sessionStorage.getItem('username');
     if(username){
     document.getElementById("name").innerHTML = `<p>${username}</p>`;
     }else{
        document.getElementById("name").innerHTML = `<p>anonymous</p>`;
     }
}

function note(){
    if(balanceValue > 1000){
        notification.innerHTML = `<p><span class="green-circle mx-2"></span>you can start saving now</p>`;
    }else if(balance < 0){
        notification.innerHTML = `<p><span class="red-circle mx-2"></span>pay attention!your balance is too low</p>`;
    }else{
        notification.innerHTML = `<p><span class="green-circle mx-2"></span>everything is good!!!</p>`;
    }
}



//update balance 
function updateBalance(){
    let value = document.getElementById("money").value;
    let amountValue = parseInt(value);
    if(amountValue > 0){
        incomeValue += amountValue;
        balanceValue += amountValue;
        income.innerHTML = `<p>${incomeValue}$</p>`;
        balance.innerHTML = `<p>${balanceValue}$</p>`;
        expence.innerHTML = `<p>${expenceValue}$</p>`;
        errorMess.innerHTML = " ";
    }else if(amountValue < 0){
        expenceValue -= amountValue;
        balanceValue += amountValue;
        expence.innerHTML = `<p>${expenceValue}$</p>`;
        balance.innerHTML = `<p>${balanceValue}$</p>`;
        income.innerHTML = `<p>${incomeValue}$</p>`;
        errorMess.innerHTML = " ";
        switch(category.value){
            case "food":
                            foodValue -= amountValue;
                            foodCard.innerHTML = `<p>$ ${foodValue}</p>`;
                            break;
            case "fuel":
                            fuelValue -= amountValue;
                            fuelCard.innerHTML = `<p>$ ${fuelValue}</p>`;
                            break;   
             case "care":
                            careValue -= amountValue;
                            careCard.innerHTML = `<p>$ ${careValue}</p>`;
                            break;   
            case "rent":
                            rentValue -= amountValue;
                            rentCard.innerHTML = `<p>$ ${rentValue}</p>`;
                            break;   
            case "other":
                                otherValue -= amountValue;
                                otherCard.innerHTML = `<p>$ ${otherValue}</p>`;
                                break;     
            default:
                console.log("no category for this");                                              
        }
    }else if(amountValue == 0){
        console.log("null transaction");
    }
    else{
        errorMess.innerHTML = "<p>enter a number</p>"
        expence.innerHTML = `<p>${expenceValue}$</p>`;
        balance.innerHTML = `<p>${balanceValue}$</p>`;
        income.innerHTML = `<p>${incomeValue}$</p>`;
    }
}

//create transaction
function createTransaction(){
    let description = document.getElementById("description").value;
    let value = document.getElementById("money").value;
    let transaction = {
        id: `TRA${Math.floor(Math.random()*100000)}`,
        value: value,
        description: description
    }
    if(transaction.value == 0){
        console.log("null transaction");
    }else{
        recentTransaction.push(transaction);
        console.log(recentTransaction);
    }
    

}
//display history
function displayHistory(){
    let recentArray = recentTransaction;
    let recentHistory = recentArray;
    let history = document.getElementById("table-transaction");
    let d = new Date();
    history.innerHTML = "";
    for(i = 0; i < 15;i ++){
        history.innerHTML += `<tr id="${recentHistory[i].value > 0? "green": "red"}"><td>${recentHistory[i].id}</td><td>${recentHistory[i].description}</td> <td>${recentHistory[i].value}</td><td>${d}</td> </tr>`;
    }
}

addButton.addEventListener("click", updateBalance);
addButton.addEventListener("click", createTransaction);
addButton.addEventListener("click",displayHistory);
addButton.addEventListener("click",note);


//api

//call
