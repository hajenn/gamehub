


const API_URL = 'https://api.noroff.dev/api/v1/gamehub';


const gameStore = document.querySelector(".game-store");

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Render the game products to the page
    data.forEach(game => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("game-card");

      const gameImg = document.createElement("img");
      gameImg.src = game.image;

      const gameTitle = document.createElement("h3");
      gameTitle.textContent = game.title;

      const gameDescription = document.createElement("p");
      gameDescription.textContent = game.description;

      const gamePrice = document.createElement("p");
      gamePrice.textContent = `$${game.price}`;

      const addToCartBtn = document.createElement("a");
      addToCartBtn.classList.add("add-to-cart-btn");
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.href = "#";
      addToCartBtn.addEventListener("click", () => {
        // Add the game to the cart
        console.log(`Added ${game.title} to cart!`);
      });

      const detailLink = document.createElement("a");
      detailLink.classList.add("detail-link");
      detailLink.textContent = "View Details";
      detailLink.href = `detail.html?id=${game.id}`;

      gameCard.appendChild(gameImg);
      gameCard.appendChild(gameTitle);
      gameCard.appendChild(gameDescription);
      gameCard.appendChild(gamePrice);
      gameCard.appendChild(addToCartBtn);
      gameCard.appendChild(detailLink);
      gameStore.appendChild(gameCard);
    });
  })
  .catch(error => console.error(error));


