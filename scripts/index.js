// Store the wallet amount to your local storage with key "amount"
function value(id){
    return document.getElementById(id).value;
  }
  var amount = localStorage.getItem("amount")||0;
      let wallet = document.getElementById("wallet");
      wallet.innerText = amount;
      
  function addMoney(){
      let inp_amount = value("amount");
      amount = Number(amount) + Number(inp_amount)
     
      wallet.innerText = amount;
      localStorage.setItem("amount",amount)
  }
  
  