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

// Jadwal Tayang (Contoh)
const schedule = [
  { title: "Attack on Titan", time: "Senin, 20:00" },
  { title: "One Piece", time: "Selasa, 18:00" },
  { title: "Gintama", time: "Rabu, 16:00" },
  { title: "Demon Slayer", time: "Kamis, 19:00" }
];

// Riwayat Nonton
let watchHistory = [];

// DOM Elements
const animeListSection = document.getElementById("anime-list");
const genreSelect = document.getElementById("genre-select");
const searchInput = document.getElementById("search-input");
const scheduleList = document.getElementById("schedule-list");
const historyList = document.getElementById("history-list");

// Fungsi untuk menampilkan anime
function displayAnime(filterGenre = "all", searchQuery = "") {
  animeListSection.innerHTML = ""; // Hapus konten sebelumnya
  animeList
    .filter(anime => {
      const genreMatch = filterGenre === "all" || anime.genre === filterGenre;
      const titleMatch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
      return genreMatch && titleMatch;
    })
    .forEach(anime => {
      const animeCard = document.createElement("div");
      animeCard.className = "anime-card";

      animeCard.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}" />
        <h3>${anime.title}</h3>
        <a href="${anime.link}" target="_blank">Tonton Sekarang</a>
      `;

      animeCard.querySelector("a").addEventListener("click", () => addToHistory(anime.title)); // Tambah ke riwayat

      animeListSection.appendChild(animeCard);
    });
}

// Fungsi untuk menampilkan jadwal tayang
function displaySchedule() {
  scheduleList.innerHTML = "";
  schedule.forEach(anime => {
    const scheduleItem = document.createElement("li");
    scheduleItem.innerHTML = `${anime.title}: ${anime.time}`;
    scheduleList.appendChild(scheduleItem);
  });
}

// Fungsi untuk menampilkan riwayat nonton
function displayHistory() {
  historyList.innerHTML = "";
  watchHistory.forEach(title => {
    const historyItem = document.createElement("li");
    historyItem.innerHTML = title;
    historyList.appendChild(historyItem);
  });
}

// Fungsi untuk menambah anime ke riwayat nonton
function addToHistory(title) {
  if (!watchHistory.includes(title)) {
    watchHistory.push(title);
    displayHistory();
  }
}

// Event Listener untuk dropdown genre
genreSelect.addEventListener("change", (e) => {
  displayAnime(e.target.value, searchInput.value);
});

// Event Listener untuk input pencarian
searchInput.addEventListener("input", (e) => {
  displayAnime(genreSelect.value, e.target.value);
});

// Tampilkan semua anime, jadwal tayang, dan riwayat nonton saat halaman dimuat
displayAnime();
displaySchedule();
displayHistory();
