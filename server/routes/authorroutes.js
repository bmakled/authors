const AuthorController = require("../controllers/author.controller")

module.exports = app => {
    app.get('/api/allAuthors', AuthorController.allAuthors)
    app.get('/api/oneAuthor/:id', AuthorController.getOneAuthor)
    app.post('/api/postAuthor', AuthorController.createAuthor)
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}