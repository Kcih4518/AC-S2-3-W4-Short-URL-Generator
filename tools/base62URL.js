const base62 = require('base62/lib/ascii')

// Ref: https://stackoverflow.com/questions/1119722/base-62-conversion
// Ref: https://segmentfault.com/a/1190000010516708
const base62URL = (length = 5) => {
  const shortURLNumber = new Array(length)
  let shortURLBase62 = ''

  // Get random numbers from 0 to 62 (A-Z a-z 0-9)
  for (let i = 0; i < length; i++) {
    const randNumber = Math.floor(Math.random() * 62)
    shortURLNumber.push(randNumber)
  }
  // Encode each number in base 62 and combine it into a string.
  shortURLNumber.forEach((number) => {
    shortURLBase62 += base62.encode(number)
  })
  return shortURLBase62
}

module.exports = base62URL
