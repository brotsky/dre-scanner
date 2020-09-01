const axios = require('axios');
const express = require('express')
const app = express()

const body = {
  cb_examSites: [
    "%27Fresno%27",
    "%27Los Angeles%27",
    "%27SF/Oakland%27",
    "%27Sacramento%27",
    "%27San Diego%27",
  ],
  cb_examTypes: "%27Salesperson%27",
  B1: "Get Exam List",
  action : "GO"
};


app.get('/', async (req, res) => {
  const site = await axios({
    method: 'POST',
    url: 'https://secure.dre.ca.gov/PublicASP/CurrentExams.asp',
    data: body,
    headers: {'Content-Type': 'multipart/form-data' }
  });
  res.send(site.data)
})
 
app.listen(process.env.PORT || 3000)