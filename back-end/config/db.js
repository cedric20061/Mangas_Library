const sqlite3 = require("sqlite3").verbose();

const path = require("path");
const dbPath = path.resolve(__dirname, "../database/manga.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err.message);
  } else {
    console.log("Connecté à la base de données SQLite.");

    // Création de la table mangas
    db.run(
      `
      CREATE TABLE IF NOT EXISTS mangas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        note REAL,
        genre TEXT,
        annee INTEGER,
        chapter INTEGER,
        volumes INTEGER,
        author TEXT,
        status TEXT,
        publisher TEXT,
        tags TEXT,
        popularity INTEGER,
        cover_image TEXT,
        last_updated TEXT,
        language TEXT,
        demographic TEXT,
        release_date TEXT
      )
    `,
      (err) => {
        if (err) {
          console.error(
            "Erreur lors de la création de la table :",
            err.message
          );
        } else {
          console.log("Table mangas créée ou déjà existante.");
          /*const mangas = [
            {
              name: "Death Note",
              description:
                "Un étudiant découvre un cahier permettant de tuer en écrivant un nom.",
              note: 9.1,
              genre: "Thriller, Mystère",
              annee: 2003,
              chapter: 108,
              volumes: 12,
              author: "Tsugumi Ohba",
              status: "Terminé",
              publisher: "Shueisha",
              tags: "mystère, psychologie, surnaturel",
              popularity: 1200000,
              cover_image: "https://example.com/deathnote.jpg",
              last_updated: "2006-05-15",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2003-12-01",
            },
            {
              name: "Fullmetal Alchemist",
              description:
                "Deux frères alchimistes cherchent la pierre philosophale.",
              note: 9.4,
              genre: "Action, Aventure",
              annee: 2001,
              chapter: 116,
              volumes: 27,
              author: "Hiromu Arakawa",
              status: "Terminé",
              publisher: "Square Enix",
              tags: "alchimie, aventure, drame",
              popularity: 1100000,
              cover_image: "https://example.com/fma.jpg",
              last_updated: "2010-06-11",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2001-07-12",
            },
            {
              name: "My Hero Academia",
              description:
                "Dans un monde de super-héros, un jeune garçon sans pouvoir rêve de devenir un héros.",
              note: 8.6,
              genre: "Action, Aventure",
              annee: 2014,
              chapter: 390,
              volumes: 37,
              author: "Kohei Horikoshi",
              status: "En cours",
              publisher: "Shueisha",
              tags: "héros, action, école",
              popularity: 1000000,
              cover_image: "https://example.com/mha.jpg",
              last_updated: "2023-09-18",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2014-07-07",
            },
            {
              name: "Hunter x Hunter",
              description:
                "Gon Freecss part à la recherche de son père et devient un Hunter.",
              note: 9.0,
              genre: "Action, Aventure",
              annee: 1998,
              chapter: 390,
              volumes: 36,
              author: "Yoshihiro Togashi",
              status: "En pause",
              publisher: "Shueisha",
              tags: "aventure, action, hunter",
              popularity: 950000,
              cover_image: "https://example.com/hxh.jpg",
              last_updated: "2023-09-10",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "1998-03-16",
            },
            {
              name: "Bleach",
              description:
                "Ichigo Kurosaki devient un Shinigami et protège le monde des esprits.",
              note: 8.4,
              genre: "Action, Surnaturel",
              annee: 2001,
              chapter: 686,
              volumes: 74,
              author: "Tite Kubo",
              status: "Terminé",
              publisher: "Shueisha",
              tags: "esprit, shinigami, combat",
              popularity: 900000,
              cover_image: "https://example.com/bleach.jpg",
              last_updated: "2016-08-22",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2001-08-07",
            },
            {
              name: "Tokyo Ghoul",
              description:
                "Kaneki se transforme en ghoul et doit apprendre à survivre.",
              note: 8.0,
              genre: "Horreur, Drame",
              annee: 2011,
              chapter: 143,
              volumes: 14,
              author: "Sui Ishida",
              status: "Terminé",
              publisher: "Shueisha",
              tags: "ghoul, horreur, drame",
              popularity: 850000,
              cover_image: "https://example.com/tokyoghoul.jpg",
              last_updated: "2014-09-18",
              language: "Japonais",
              demographic: "Seinen",
              release_date: "2011-09-08",
            },
            {
              name: "Demon Slayer",
              description:
                "Un jeune épéiste combat des démons pour venger sa famille.",
              note: 9.3,
              genre: "Action, Aventure",
              annee: 2016,
              chapter: 205,
              volumes: 23,
              author: "Koyoharu Gotouge",
              status: "Terminé",
              publisher: "Shueisha",
              tags: "démons, combat, vengeance",
              popularity: 950000,
              cover_image: "https://example.com/demonslayer.jpg",
              last_updated: "2020-05-18",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2016-02-15",
            },
            {
              name: "Fairy Tail",
              description:
                "Les aventures de la guilde Fairy Tail dans un monde de magie.",
              note: 8.1,
              genre: "Action, Fantastique",
              annee: 2006,
              chapter: 545,
              volumes: 63,
              author: "Hiro Mashima",
              status: "Terminé",
              publisher: "Kodansha",
              tags: "magie, guilde, aventure",
              popularity: 870000,
              cover_image: "https://example.com/fairytail.jpg",
              last_updated: "2017-07-26",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2006-08-02",
            },
            {
              name: "Black Clover",
              description:
                "Asta, un jeune garçon sans magie, rêve de devenir le roi sorcier.",
              note: 8.2,
              genre: "Action, Fantastique",
              annee: 2015,
              chapter: 364,
              volumes: 33,
              author: "Yuki Tabata",
              status: "En cours",
              publisher: "Shueisha",
              tags: "magie, aventure, roi",
              popularity: 800000,
              cover_image: "https://example.com/blackclover.jpg",
              last_updated: "2023-09-12",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2015-02-16",
            },
            {
              name: "JoJo's Bizarre Adventure",
              description:
                "Les aventures excentriques des membres de la famille Joestar.",
              note: 8.8,
              genre: "Action, Fantastique",
              annee: 1987,
              chapter: 957,
              volumes: 130,
              author: "Hirohiko Araki",
              status: "En cours",
              publisher: "Shueisha",
              tags: "aventure, fantastique, excentrique",
              popularity: 900000,
              cover_image: "https://example.com/jojo.jpg",
              last_updated: "2023-10-01",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "1987-01-01",
            },
            {
              name: "Naruto",
              description: "Un jeune ninja en quête de reconnaissance.",
              note: 9.0,
              genre: "Action, Aventure",
              annee: 1999,
              chapter: 700,
              volumes: 72,
              author: "Masashi Kishimoto",
              status: "Terminé",
              publisher: "Shueisha",
              tags: "ninja, aventure, combat",
              popularity: 1000000,
              cover_image: "https://example.com/naruto.jpg",
              last_updated: "2014-11-10",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "1999-09-21",
            },
            {
              name: "One Piece",
              description:
                "Luffy et son équipage à la recherche du trésor One Piece.",
              note: 9.5,
              genre: "Action, Aventure",
              annee: 1997,
              chapter: 1000,
              volumes: 100,
              author: "Eiichiro Oda",
              status: "En cours",
              publisher: "Shueisha",
              tags: "pirate, aventure, trésor",
              popularity: 1500000,
              cover_image: "https://example.com/onepiece.jpg",
              last_updated: "2023-10-21",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "1997-07-22",
            },
            {
              name: "Attack on Titan",
              description: "L'humanité lutte contre les Titans.",
              note: 9.2,
              genre: "Action, Horreur",
              annee: 2009,
              chapter: 139,
              volumes: 34,
              author: "Hajime Isayama",
              status: "Terminé",
              publisher: "Kodansha",
              tags: "titans, action, horreur",
              popularity: 1200000,
              cover_image: "https://example.com/aot.jpg",
              last_updated: "2021-04-09",
              language: "Japonais",
              demographic: "Shonen",
              release_date: "2009-09-09",
            },
          ];
          mangas.forEach((manga) => {
            db.run(
              `INSERT INTO mangas (name, description, note, genre, annee, chapter, volumes, author, status, publisher, tags, popularity, cover_image, last_updated, language, demographic, release_date)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                manga.name,
                manga.description,
                manga.note,
                manga.genre,
                manga.annee,
                manga.chapter,
                manga.volumes,
                manga.author,
                manga.status,
                manga.publisher,
                manga.tags,
                manga.popularity,
                manga.cover_image,
                manga.last_updated,
                manga.language,
                manga.demographic,
                manga.release_date,
              ],
              (err) => {
                if (err) {
                  console.error("Erreur lors de l'insertion :", err.message);
                } else {
                  console.log(
                    `${manga.name} a été ajouté à la base de données.`
                  );
                }
              }
            );
          });*/
        }
      }
    );
  }
});
module.exports = db;
