const axios = require('axios');
const express = require('express')
const app = express()

const body = {
  // cb_examSites: [
  //   "Fresno",
  //   "Los Angeles",
  //   "SF/Oakland",
  //   "Sacramento",
  //   "San Diego",
  // ],
  cb_examSites: "Fresno",
  cb_examTypes: "Salesperson",
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