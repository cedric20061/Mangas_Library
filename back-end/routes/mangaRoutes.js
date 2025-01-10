const express = require('express');
const router = express.Router();
const mangaController = require('../controllers/mangaControllers');

router.get('/mangas', mangaController.getAllMangas);
router.get('/mangas/:id', mangaController.getMangaById);
router.post('/mangas', mangaController.createManga);
router.put('/mangas/:id', mangaController.updateManga);
router.delete('/mangas/:id', mangaController.deleteManga);

module.exports = router;
