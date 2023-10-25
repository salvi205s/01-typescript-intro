/*
Este código está escrito en JavaScript y utiliza destructuring assignment para extraer propiedades de los objetos.

El objeto `audioPlayer` tiene las siguientes propiedades:

- `canción`: El nombre de la canción.
- `songDuration`: La duración de la canción en segundos.
- `details`: Un objeto que contiene información sobre el autor y el año de la canción.

El código desestructura estas propiedades del objeto `audioPlayer` y las asigna a nuevas variables.

He aquí un desglose del código:

1. Const { song: antherSong, songDuration: duration } = audioPlayer;`: Esta línea de código está desestructurando las propiedades `song` y `songDuration` del objeto `audioPlayer` y asignándolas a las nuevas variables `antherSong` y `duration`, respectivamente.

2. `const { autor: autor } = audioPlayer.details;`: Esta línea de código está desestructurando la propiedad `author` del objeto `details` dentro del objeto `audioPlayer` y asignándola a una nueva variable `author`.
*/
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

// const { song: antherSong, songDuration: duration } = audioPlayer;
// const { author: author } = audioPlayer.details;

// console.log("Song: ", antherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

const [p1, p2, trunks = "Not found"]: string[] = ["Goku", "Vegeta", "Trunks"];

console.error("Personaje 3: ", trunks);

export {};
