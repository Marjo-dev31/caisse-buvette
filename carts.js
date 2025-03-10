const cartsElement = document.getElementById("carts");

async function getItems() {
   await fetch("http://localhost:8000/items")
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
