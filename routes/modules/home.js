const express = require('express')
const router = express.Router()

// Read : View the url input page
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
