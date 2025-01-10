const db = require("../config/db");

const Manga = {
  getAll: (callback) => {
    db.all(`SELECT * FROM mangas`, [], (err, rows) => {
      callback(err, rows);
    });
  },
  getById: (id, callback) => {
    db.get(`SELECT * FROM mangas WHERE id = ?`, [id], (err, row) => {
      callback(err, row);
    });
  },
  create: (manga, callback) => {
    const { name, description, affiche, note, genre, chapters, release_date } = manga;
    db.run(
      `INSERT INTO mangas (name, description, affiche, note, genre, chapters, release_date) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, description, affiche, note, genre, chapters, release_date],
      function (err) {
        callback(err, this.lastID);
      }
    );
  },
  update: (id, manga, callback) => {
    const { name, description, cover_image, note, genre, release_date } = manga;
    db.run(
      `UPDATE mangas SET name = ?, description = ?, cover_image = ?, note = ? WHERE id = ?`,
      [name, description, cover_image, note, id],
      function (err) {
        callback(err, this.changes);
      }
    );
  },
  delete: (id, callback) => {
    db.run(`DELETE FROM mangas WHERE id = ?`, [id], function (err) {
      callback(err, this.changes);
    });
  },
};

module.exports = Manga;
