const Blog = require('../models/Blog');

class BlogController {
    static getAll(req, res) {
        const tips = Blog.getAll();
        res.render('index', { tips, title: 'Блог про психологію' });
    }

    static getItem(req, res) {
        const tip = Blog.getById(Number(req.params.id));
        if (!tip) {
            return res.status(404).render('error', { title: 'Помилка', message: 'Пораду не знайдено' });
        }
        res.render('item', { tip, title: tip.title });
    }

    static showCreateForm(req, res) {
        res.render('new', { title: 'Додати пораду' });
    }

    static createPost(req, res) {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).render('error', { title: 'Помилка', message: 'Заповніть всі поля.' });
        }
        Blog.addPost(title, description);
        res.redirect('/');
    }

    static privacyPolicy(req, res) {
        res.render('privacy', { title: 'Політика конфіденційності' });
    }

    static about(req, res) {
        res.render('about', { title: 'Про автора', githubLink: 'https://github.com/2hardmeme' });
    }
}

module.exports = BlogController;
