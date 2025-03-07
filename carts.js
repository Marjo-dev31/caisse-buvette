const cartsElement = document.getElementById("carts");


async function getItems() {
   await fetch("http://localhost:8000/items")
      .then((response) => {
          return response.json()
      })
      .then((resJson) => {resJson.forEach(element => {
        const cartArray = element.cart
        cartArray.forEach((e)=> 
           { const liElement = document.createElement("li")
            const {name,quantity } = e
            liElement.append(name, ":", quantity)
        cartsElement.append(liElement)})        
        })}
      )}

