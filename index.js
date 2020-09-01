const axios = require('axios');
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

var data = 'cb_examSites=%27Los+Angeles%27&cb_examTypes=%27Salesperson%27&B1=Get+Exam+List&action=GO';

var config = {
  method: 'post',
  url: 'https://secure.dre.ca.gov/PublicASP/CurrentExams.asp',
  headers: { 
    'content-type': 'application/x-www-form-urlencoded', 
  },
  data : data
};

app.get('/', async (req, res) => {
  const site = await axios(config);
  res.send(site.data)
})
 
app.listen(PORT)

console.log(`http://localhost:${PORT}`)