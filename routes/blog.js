const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// Головна сторінка
router.get('/', BlogController.getAll);

// Сторінка з порадою
router.get('/item/:id', BlogController.getItem);

// Сторінка для створення нової поради
router.get('/new', BlogController.showCreateForm);

// Додавання нової поради
router.post('/new', BlogController.createPost);

// Політика конфіденційності
router.get('/privacy', BlogController.privacyPolicy);

// Про автора
router.get('/about', BlogController.about);

module.exports = router;

