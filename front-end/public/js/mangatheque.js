async function fetchAndDisplay() {
  const mangaGrid = document.getElementById("manga-grid");
  try {
    const response = await fetch("http://localhost:5000/mangas");
    const mangas = await response.json();
    mangas.forEach((manga) => {
      const mangaCard = document.createElement("div");
      mangaCard.className = "bg-gray-700 rounded-lg p-4";
      mangaCard.innerHTML = `
          <img
            class="h-60 w-full object-cover rounded-lg mb-4"
            src="${manga.cover_image}"
            alt="${manga.name}"
          />
          <h3 class="text-xl font-semibold mb-2">${manga.name}</h3>
          <p class="text-gray-300 mb-2">Auteur : ${manga.author}</p>
          <span class="text-sm text-white bg-pink-400 p-1 rounded-lg">${manga.genre}</span>
        `;
      mangaGrid.appendChild(mangaCard);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des mangas :", error);
  }
}
fetchAndDisplay()