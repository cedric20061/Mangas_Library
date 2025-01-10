async function fetchMangas() {
  try {
    const response = await fetch("http://localhost:5000/mangas");
    const mangas = await response.json();
    const sortedMangas = mangas.sort((a, b) => b.chapter - a.chapter);
    const popularManga = mangas.filter((manga) => manga.popularity > 5);
    displayLatestManga(sortedMangas.slice(0, 10));
    displayRecentManga(mangas);
    displayPopularManga(popularManga);
  } catch (error) {
    console.error("Erreur lors de la récupération des mangas :", error);
  }
}
function displayPopularManga(mangas) {
  const popularMangaContainer = document.getElementById("popular");
  let currentIndex = 0;
  let interval;

  // Function to render the current manga
  function renderManga(index) {
    const manga = mangas[index];
    popularMangaContainer.innerHTML = ""; // Clear the container

    // Create manga card
    const mangaCard = document.createElement("div");
    mangaCard.className = "flex space-x-4 items-center";
    mangaCard.innerHTML = `
        <img class="h-96 w-64 rounded-lg object-cover" src="${manga.cover_image}" alt="${manga.name}" />
        <div class="flex flex-col justify-between px-4 max-w-md">
          <div>
            <h2 class="text-3xl py-4 text-white font-bold">${manga.name}</h2>
            <span class="p-1 text-sm text-white bg-pink-500 rounded-lg">${manga.genre}</span>
            <p class="text-white pt-4">${manga.description}</p>
          </div>
          <div class="flex justify-between items-center text-gray-400 pt-4">
            <p class="text-gray-300">Auteur: ${manga.author}</p>
            <div class="flex space-x-2">
              <button id="left" class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Précédent</button>
              <button id="right" class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Suivant</button>
            </div>
          </div>
        </div>
      `;

    // Button actions
    mangaCard.querySelector("#left").addEventListener("click", () => {
      updateMangaIndex(currentIndex - 1);
      resetAutoSlide(); // Reset auto-slide on manual change
    });
    mangaCard.querySelector("#right").addEventListener("click", () => {
      updateMangaIndex(currentIndex + 1);
      resetAutoSlide(); // Reset auto-slide on manual change
    });

    popularMangaContainer.appendChild(mangaCard);
  }

  // Function to update the manga index and render
  function updateMangaIndex(newIndex) {
    currentIndex = (newIndex + mangas.length) % mangas.length; // Wrap-around logic
    renderManga(currentIndex);
  }

  // Auto-slide every 5 seconds
  function startAutoSlide() {
    interval = setInterval(() => updateMangaIndex(currentIndex + 1), 5000);
  }

  // Reset the interval for auto-slide
  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // Initialize
  renderManga(currentIndex);
  startAutoSlide();
}

function displayLatestManga(mangas) {
  const updatesContainer = document.getElementById("latest-Updates");
  updatesContainer.innerHTML = ""; // Efface le contenu précédent

  mangas.forEach((manga) => {
    const mangaCard = document.createElement("div");
    mangaCard.className =
      "bg-gray-800 shadow-lg rounded-lg p-4 flex items-center space-x-4";

    // Ajoutez une petite image à gauche
    mangaCard.innerHTML = `
        <img src="${manga.cover_image}" alt="${
      manga.name
    } Cover" class="w-16 h-20 object-cover rounded-md" />
        <div class="flex-1">
            <h3 class="text-white font-bold text-lg">${manga.name}</h3>
            <p class="text-white-600 text-sm">Dernier Chapitre: ${
              manga.chapter
            }</p>
            <p class="text-white-600 text-sm">Vues: ${manga.popularity}</p>
            <p class="text-yellow-500 text-xs sm:text-sm md:text-base">
                ${"★".repeat(Math.round(manga.note))}${"☆".repeat(
      10 - Math.round(manga.note)
    )}
            </p>
        </div>
    `;

    updatesContainer.appendChild(mangaCard);
  });
}

function displayRecentManga(mangas) {
  const recentContainer = document.getElementById("recently-added");
  recentContainer.innerHTML = ""; // Efface le contenu précédent

  mangas.forEach((manga) => {
    const mangaCard = document.createElement("div");
    mangaCard.className =
      "relative bg-gray-800 rounded-lg transition-transform transform hover:scale-105 flex-shrink-0 w-64 h-96 m-2"; // Ajout de flex-shrink-0

    mangaCard.innerHTML = `
            <img src="${manga.cover_image}" alt="${
      manga.name
    } Cover" class="w-64 h-96 object-cover" />
            <div class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 w-64 h-96 hover:opacity-100 transition-opacity p-4">
                <h3 class="text-white font-bold text-lg">${manga.name}</h3>
                <p class="text-yellow-500 text-sm">Chapitres: ${
                  manga.chapter
                }</p>
                <p class="text-yellow-500 text-sm">Note: ${"★".repeat(
                  Math.round(manga.note)
                )} (${manga.note})</p>
                <p class="text-gray-300 text-sm text-center mt-2">${
                  manga.description
                }</p>
            </div>
        `;

    recentContainer.appendChild(mangaCard);
  });
}

// Appel de la fonction pour récupérer et afficher les mangas
fetchMangas();
