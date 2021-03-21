const express = require('express');
const { questionsGetController, questionsPostController, questionsHelpfulController, questionsReportController, answerGetController, answerPostController, answerHelpfulController, answerReportController} = require('../controller/questionsController.js')

const router = express.Router();


//questions routes
router.get('/questions', questionsGetController);

// router.post('/questions', questionsPostController);

// router.put('/questions/:question_id/helpful', questionsHelpfulController);

// router.put('/questions/:question_id/report', questionsReportController);


//answers routes
router.get('/questions/:question_id/answers', answerGetController);

// router.post('/questions/:question_id/answers', answerPostController);

// router.put('/answers/:answer_id/helpful', answerHelpfulController);

// router.put('/answers/:answer_id/report', answerReportController);

module.exports = router