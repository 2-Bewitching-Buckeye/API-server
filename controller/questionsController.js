const axios = require('axios');

//questions controllers
exports.questionsGetController = (req, res) => {
  var query = req.query;
  axios.get(`http://localhost:3000/qa/questions/?product_id=${query.product_id}&count=${query.count}&page=${query.page}`)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
}

//throwing Converting circular structure to JSON error despite successful post
exports.questionsPostController = (req, res) => {
  var body = req.body;
  axios.post(`http://localhost:3000/qa/questions`, body)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
  }

  //throwing Converting circular structure to JSON error despite successful post
exports.questionsHelpfulController = (req, res) => {
var params = req.params;
console.log(req.params)
  axios.put(`http://localhost:3000/qa/questions/${params.question_id}/helpful`)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
  }

exports.questionsReportController = (req, res) => {
var params = req.params;
console.log(req.params)
  axios.put(`http://localhost:3000/qa/questions/${params.question_id}/report`)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
  }

// //answers controllers
exports.answerGetController = (req, res) => {
  axios.get(`http://localhost:3000/qa/questions/${req.params.question_id}/answers?page=${req.query.page}&count=${req.query.count}`)
    .then((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
  }

 exports.answerPostController = (req, res) => {
  var body = req.body;
  console.log(body)
  console.log(req.params)
  axios.post(`http://localhost:3000/qa/questions/${req.params.question_id}/answers`, body)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
}

exports.answerHelpfulController = (req, res) => {
var params = req.params;
console.log(req.params)
  axios.put(`http://localhost:3000/qa/answers/${params.answer_id}/helpful`)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
  }

exports.answerReportController = (req, res) => {
  var params = req.params;
console.log(req.params)
  axios.put(`http://localhost:3000/qa/answers/${params.answer_id}/report`)
    .then((result) => {
      console.log(result.data)
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
}
