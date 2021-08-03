const express = require('express')
const router = express.Router()
const base62URL = require('../../tools/base62URL')
const URL = require('../../models/urls')
const PORT = process.env.PORT || 3000
const urlProtocolAndServer = process.env.APP_URL || `http://localhost:${PORT}/`

// Read : View the url input page
router.get('/', (req, res) => {
  res.render('index')
})

// Create: Add new short url
router.post('/', async (req, res) => {
  const originURL = req.body.originURL
  const shortURLCheck = await URL.find({ originURL }).lean()

  // Check the originURL, if the Database already exists, return the first shortURL
  if (shortURLCheck.length) {
    const shortURL = shortURLCheck[0].shortURL
    return res.render('index', { originURL, shortURL, urlProtocolAndServer })
  }

  // Obtain a 5-character string, which is coded in base 62 by 5 arrays of 0~62 numbers
  const shortURL = base62URL()

  return URL.create({ originURL, shortURL })
    .then(() => {
      res.render('index', { originURL, shortURL, urlProtocolAndServer })
    })
    .catch((error) => console.log(error))
})

// Read: Redirect the webpage to originURL by querying the database shortURL
router.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  return URL.find({ shortURL })
    .lean()
    .then((url) => {
      res.redirect(`${url[0].originURL}`)
    })
    .catch((error) => console.log(error))
})

module.exports = router
