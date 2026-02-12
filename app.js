const totalValueElement = document.getElementById("totalValue");
totalValueElement.value = 0;
const liElement = document.querySelectorAll("li");
const spanElementQuery = document.querySelectorAll("span");
const removeBtnElement = document.getElementsByClassName("moins");

const quantityArray = [
   { name: "ecocup", quantity: 0 },
   { name: "cafe", quantity: 0 },
   { name: "boisson", quantity: 0 },
   { name: "chocolat chaud", quantity: 0 },
   { name: "eau", quantity: 0 },
   { name: "bière", quantity: 0 },
   { name: "crepe au sucre", quantity: 0 },
   { name: "crepe nutella", quantity: 0 },
   { name: "chocolatine", quantity: 0 },
   { name: "sucette", quantity: 0 },
   // { name: "bonbon", quantity: 0 },
   { name: "kinder bueno", quantity: 0 },
   { name: "croque monsieur", quantity: 0 },
   { name: "frite", quantity: 0 },
   { name: "sandwich", quantity: 0 },
   // { name: "hotdog", quantity: 0 },
   { name: "americain", quantity: 0 },
   { name: "rieumois", quantity: 0 },
   { name: "croque nutella", quantity: 0 },
   { name: "sandwich jambon", quantity: 0 },
   { name: "madeleine", quantity: 0 },
   { name: "porte-clé", quantity: 0 },
   { name: "stickers", quantity: 0 },
];

function add2(price, label) {
   const result = (totalValueElement.value += price);
   totalValueElement.innerHTML = result;
   const element = quantityArray.findIndex((e) => e.name === label);
   const quantity = (quantityArray[element].quantity += 1);
   spanElementQuery[element].innerHTML = quantity;

   if (quantity >= 1) {
      removeBtnElement[element].classList.remove("disabled");
   }
}

function reset() {
   totalValueElement.value = 0;
   totalValueElement.innerHTML = totalValueElement.value;
   spanElementQuery.forEach((e) => (e.innerHTML = 0));
   quantityArray.forEach((e) => (e.quantity = 0));
   Array.from(removeBtnElement).forEach((e) =>
      e.classList.add("disabled")
   );
}

function remove(price, label) {
   const result = (totalValueElement.value -= price);
   totalValueElement.innerHTML = result;
   const element = quantityArray.findIndex((e) => e.name === label);
   const quantity = (quantityArray[element].quantity -= 1);
   spanElementQuery[element].innerHTML = quantity;
   if (quantity === 0) {
      removeBtnElement[element].classList.add("disabled");
   }
}

async function updateItem() {
   
   const header = new Headers();
   header.append("Content-type", "application/json");
   const init = {
      method: "PATCH",
      headers: header,
      body: JSON.stringify(quantityArray),
   };
   await fetch("https://k3yazg4mb0.execute-api.eu-west-3.amazonaws.com/", init)
      .then((response) => {
         response;
         console.log(response)
      })
      .catch((error) => {
         console.log(error);
      });
}

async function submitForm() {
   const header = new Headers();
   header.append("Content-type", "application/json");
   const init = {
      method: "POST",
      headers: header,
      body: JSON.stringify(quantityArray),
   };
   await fetch("https://k3yazg4mb0.execute-api.eu-west-3.amazonaws.com/", init)
      .then((response) => {
         response;
         updateItem();
         reset()
      })
      .catch((error) => {
         console.log(error);
      });
   
}



