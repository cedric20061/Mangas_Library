const Manga = require('../models/mangaModel');

exports.getAllMangas = (req, res) => {
  Manga.getAll((err, mangas) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(mangas);
  });
};

exports.getMangaById = (req, res) => {
  const id = req.params.id;
  Manga.getById(id, (err, manga) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!manga) return res.status(404).json({ error: 'Manga not found' });
    res.json(manga);
  });
};

exports.createManga = (req, res) => {
  const newManga = req.body;
  Manga.create(newManga, (err, mangaId) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: mangaId, ...newManga });
  });
};

exports.updateManga = (req, res) => {
  const id = req.params.id;
  const updatedManga = req.body;
  Manga.update(id, updatedManga, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ error: 'Manga not found' });
    res.json({ id, ...updatedManga });
  });
};

exports.deleteManga = (req, res) => {
  const id = req.params.id;
  Manga.delete(id, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ error: 'Manga not found' });
    res.json({ message: 'Manga deleted successfully' });
  });
};
