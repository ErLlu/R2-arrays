import askUser from "./askUser.js";

const songsList = [
  "The Unforgiven",
  "Phantom of the Opera",
  "Zombie",
  "El Mañana",
];
const songPosition = Number(askUser("Introduce la posición de la canción:"));

if (songPosition >= 1 && songPosition <= songsList.length) {
  console.log(songsList.at(songPosition - 1));
} else {
  console.log(
    `Error, no hay ninguna canción para la posición ${songPosition}.`
  );
}
