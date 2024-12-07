const posts = [
    { id: 1, title: 'Як подолати стрес', description: 'Використовуйте дихальні техніки та медитацію.' },
    { id: 2, title: 'Розвиток впевненості у собі', description: 'Ставте перед собою досяжні цілі.' },
    { id: 3, title: 'Як боротися з прокрастинацією', description: 'Почніть з маленьких кроків і нагороджуйте себе.' },
];

class Blog {
    static getAll() {
        return posts;
    }

    static getById(id) {
        return posts.find(post => post.id === id);
    }

    static addPost(title, description) {
        const newPost = {
            id: posts.length + 1,
            title,
            description,
        };
        posts.push(newPost);
        return newPost;
    }
}

module.exports = Blog;
