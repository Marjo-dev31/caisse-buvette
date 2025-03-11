const cartsElement = document.getElementById("carts");

async function getItems() {
   await fetch(
      "https://k3yazg4mb0.execute-api.eu-west-3.amazonaws.com/items"
   )
      .then((response) => {
         return response.json();
      })
      .then((resJson) => {
         resJson.forEach((element) => {
            if (element.quantity >= 0) {
               const { cartId, quantity } = element;
               const liElement = document.createElement("li");
               liElement.append(cartId, ":", quantity);
               cartsElement.append(liElement);
            }
         });
      });
}

getItems();
