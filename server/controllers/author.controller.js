const Author = require('../models/author')

module.exports = {
    //Key value pairs
    //Keys are the names of the functions and values are the functions
    allAuthors:(req,res) => {
        Author.find({})
            .then((allAuthors) => {
                res.json(allAuthors)
            })
            .catch((err)=> {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    getOneAuthor: (req,res)=>{
        Author.findOne({_id:req.params.id})
            .then((oneAuthor)=> {
                res.json(oneAuthor)
            })
            .catch((err)=>{res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    createAuthor:(req,res) => {
        Author.create(req.body)
            .then((newAuthor)=>{
                res.json(newAuthor)
            })
            .catch((err)=>{res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    updateAuthor:(req,res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => {
                res.json({ author: updatedAuthor })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    deleteAuthor:(req,res) => {
        Author.deleteOne({_id:req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
}