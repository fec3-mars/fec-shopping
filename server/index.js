const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
axios.defaults.baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc";

app.get('/*', (req, res) => {
  console.log('get method: ', req.method);
  axios({
    method: req.method,
    url: req.url,
    headers: {
      Authorization: process.env.TOKEN,
    },
  })
    .then((results) => {
      console.log('get results: ', results.data);
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/*', (req, res) => {
  console.log(req.body);
  axios({
    method: req.method,
    url: req.url,
    data: req.body,
    headers: {
      Authorization: process.env.TOKEN,
    },
  })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      // console.log('====asan error')
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});