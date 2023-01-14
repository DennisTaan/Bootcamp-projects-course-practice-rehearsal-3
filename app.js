// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
  console.log('Calculating...');
  //ui var
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments= parseFloat(years.value)* 12;

  // compute monthly payment
  const x = Math.pow(1+calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
  }else{
    console.log("please check your numbers");
      showerror("Please check your numbers");
  }
  
  e.preventDefault();
}


function showerror(error){
const errorDiv = document.createElement("div");

// get element
const card = document.querySelector(".card");
const heading=document.querySelector(".heading");

//add a class
errorDiv.className="alert alert-danger";

// create text nod and append to div

errorDiv.appendChild(document.createTextNode(error));
// insert error above head
card.insertBefore(errorDiv,heading);

// clear eeror after 3 sec

setTimeout(clearError,3000);
}

function clearError(e){
  document.querySelector(".alert").remove();
}