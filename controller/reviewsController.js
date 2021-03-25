const axios = require('axios');

exports.reviewsController = (req, res) => {
  axios.get(`http://localhost:3000/api/reviews/${req.params.product_id}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log('err', err))
};

