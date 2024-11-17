fetch("products.json")
  .then((response) => response.json())
  .then((json) => {
    const products = json;
    const productGrid = document.querySelector(".product-container");
    console.log(json);

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = ` <img src="${product.image_url}" alt="${product.name}"/> <h2 class="product"> ${product.name}</h2> <p>${product.price}</p> <p>${product.description}</p> <p>${product.size}</p>`;
      productGrid.appendChild(productCard);
    });
  })
  .catch((error) => console.log(error));
