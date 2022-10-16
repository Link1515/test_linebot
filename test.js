import axios from 'axios'
// import cheerio from 'cheerio'

// axios.get('https://wdaweb.github.io/').then(({ data }) => {
//   const $ = cheerio.load(data)
//   console.log($('#go .col-lg-3.col-md-6').eq(0).find('h4').text())
// })

axios.defaults.timeout = 10000

axios.get(encodeURI('https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場')).then(({ data }) => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
