const express = require('express')
const router = express.Router()
const Question = require('./models/Question') // includes our model
// get all quiz questions

//const User = require('../models/user');

router.get('/', (req, res, next) => {
    Question.find()
    .then(documents => {
        res.status(200).json({
            message: "Questions Fetched Successfully",
            questions: documents
        });
    })
    .catch(error => {
        res.status(500).json(
            {
                message: 'Failed to fetch Questions',
                error: error
            }
        );
    });
});

router.post('/', (req, res, next) => {
    const question = new Question({
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        answer: req.body.answer
    });
    question
    .save()
    .then(result => {
        res.status(201).json({
            message: 'Question Added',
            result: result
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to Add Question'
        });
    });
});


module.exports = router