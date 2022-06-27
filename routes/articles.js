const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

// GET all articles
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// Add new article
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    })

    newArticle.save()
    .then(() => res.json("Article posted successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

// Find article by ID
router.get('/:id',(req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`));

})

// Update article
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title,
        article.article = req.body.article,
        article.authorname = req.body.authorname;

        article.save().then(()=> res.json("Article Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})



// Delete article
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article is deleted"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router;