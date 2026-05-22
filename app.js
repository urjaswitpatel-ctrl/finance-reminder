import { db } from "./firebase.js";

import {
 addDoc,
 collection
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function calculateEMI(P, annualRate, N) {

  let r = annualRate / 12 / 100;

  let emi =
    (P * r * Math.pow(1 + r, N)) /
    (Math.pow(1 + r, N) - 1);

  return emi.toFixed(2);
}

window.saveCustomer = async function () {

  let name =
    document.getElementById("name").value;

  let phone =
    document.getElementById("phone").value;

 let product =
document.getElementById("product").value;

 let productPrice =
parseFloat(
document.getElementById("productPrice").value
);

 let downPayment =
parseFloat(
document.getElementById("downPayment").value
);

 let loanAmount =
productPrice - downPayment;


  let amount =
    parseFloat(document.getElementById("amount").value);

  let rate =
    parseFloat(document.getElementById("rate").value);

  let months =
    parseInt(document.getElementById("months").value);

 let emi =
calculateEMI(
loanAmount,
rate,
months
);



 document.getElementById("emiResult")
.innerHTML = `

Loan Amount:
₹${loanAmount}

<br><br>

Monthly EMI:
₹${emi}
`;

  await addDoc(collection(db, "customers"), {
    name,
    phone,
    amount,
    rate,
    months,
    emi
  });

  alert("Customer Saved!");
}
