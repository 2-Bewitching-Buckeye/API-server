const axios = require('axios');

//questions controllers
exports.questionsGetController = (req, res) => {
  console.log(req.body)
  axios.get(`http://localhost:3000/qa/questions`, {params: req.body})
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
}

// exports.questionsPostController = (req, res) => {
//   axios.get(`http://localhost:3000/qa/questions`)
//     .then((result) => {
//       console.log(result)
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.sendStatus(400)
//     })
//   }
// exports.questionsHelpfulController
// exports.questionsReportController


// //answers controllers
exports.answerGetController = (req, res) => {
  console.log(req.params.question_id)
  axios.get(`http://localhost:3000/qa/questions/${req.params.question_id}/answers`)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
  }
// exports.answerPostController
// exports.answerHelpfulController
// exports.answerReportController
