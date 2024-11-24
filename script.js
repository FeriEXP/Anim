// Data Anime
const animeList = [
  {
    title: "Attack on Titan",
    image: "https://via.placeholder.com/200x300?text=Attack+on+Titan",
    link: "https://example.com/attack-on-titan"
  },
  {
    title: "Demon Slayer",
    image: "https://via.placeholder.com/200x300?text=Demon+Slayer",
    link: "https://example.com/demon-slayer"
  },
  {
    title: "One Piece",
    image: "https://via.placeholder.com/200x300?text=One+Piece",
    link: "https://example.com/one-piece"
  }
];

// DOM Element
const animeListSection = document.getElementById("anime-list");

// Menampilkan Data Anime
animeList.forEach((anime) => {
  const animeCard = document.createElement("div");
  animeCard.className = "anime-card";

  animeCard.innerHTML = `
    <img src="${anime.image}" alt="${anime.title}" />
    <h3>${anime.title}</h3>
    <a href="${anime.link}" target="_blank">Tonton Sekarang</a>
  `;

  animeListSection.appendChild(animeCard);
});
