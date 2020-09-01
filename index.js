const axios = require('axios');
const express = require('express')
const app = express()


axios.post('https://secure.dre.ca.gov/PublicASP/CurrentExams.asp', {
  cb_examSites: [
    "'Fresno'",
    "'Los Angeles'",
    "'SF/Oakland'",
    "'Sacramento'",
    "'San Diego'",
  ],
  cb_examTypes: "'Salesperson'",
  B1: "Get Exam List",
  action : "GO"
}).then(response => {
  console.log('response', response);
})

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.send(`Hello ${name}!`)
}