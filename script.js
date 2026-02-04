const dogContainer = document.getElementById("dog-container");
const errorContainer = document.getElementById("error-container");


const names = ["Puppaa", "Lunaa", "Charlie", "Max", "Bella", "Rocky"];
const genders = ["Male", "Female"];
const personalities = ["Playful", "Calm", "Curious", "Loyal", "Goofy"];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createDogCard(imageUrl) {
  const card = document.createElement("div");
  card.className = "dog-card";

  card.innerHTML = `
    <img src="${imageUrl}" alt="A cute dog" />
    <div class="dog-name">${getRandomItem(names)}</div>
    <div class="dog-meta">Gender: ${getRandomItem(genders)}</div>
    <div class="dog-meta">Personality: ${getRandomItem(personalities)}</div>
  `;

  return card;
}

async function getDogs() {
  try {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random/6"
    );

    if (!response.ok) {
      throw new Error("Network response failed");
    }

    const data = await response.json();

    data.message.forEach(imageUrl => {
      const dogCard = createDogCard(imageUrl);
      dogContainer.appendChild(dogCard);
    });

  } catch (error) {
    errorContainer.textContent =
      "Oops! Something went wrong. The dogs escaped 🐕💨";
  } finally {
    console.log("Dog fetch completed");
  }
}

getDogs();
