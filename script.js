// Data Anime
const animeList = [
  {
    title: "Attack on Titan",
    image: "https://via.placeholder.com/200x300?text=Attack+on+Titan",
    link: "https://example.com/attack-on-titan",
    genre: "action"
  },
  {
    title: "One Piece",
    image: "https://via.placeholder.com/200x300?text=One+Piece",
    link: "https://example.com/one-piece",
    genre: "adventure"
  },
  {
    title: "Gintama",
    image: "https://via.placeholder.com/200x300?text=Gintama",
    link: "https://example.com/gintama",
    genre: "comedy"
  },
  {
    title: "Demon Slayer",
    image: "https://via.placeholder.com/200x300?text=Demon+Slayer",
    link: "https://example.com/demon-slayer",
    genre: "action"
  }
];

// DOM Elements
const animeListSection = document.getElementById("anime-list");
const genreSelect = document.getElementById("genre-select");

// Fungsi untuk menampilkan anime
function displayAnime(filterGenre = "all") {
  animeListSection.innerHTML = ""; // Hapus konten sebelumnya
  animeList
    .filter(anime => filterGenre === "all" || anime.genre === filterGenre)
    .forEach(anime => {
      const animeCard = document.createElement("div");
      animeCard.className = "anime-card";

      animeCard.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}" />
        <h3>${anime.title}</h3>
        <a href="${anime.link}" target="_blank">Tonton Sekarang</a>
      `;

      animeListSection.appendChild(animeCard);
    });
}

// Event Listener untuk dropdown genre
genreSelect.addEventListener("change", (e) => {
  displayAnime(e.target.value);
});

// Tampilkan semua anime saat halaman dimuat
displayAnime();
