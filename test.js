import axios from 'axios'
import cheerio from 'cheerio'

axios.get('https://wdaweb.github.io/').then(({ data }) => {
  const $ = cheerio.load(data)
  console.log($('#go .col-lg-3.col-md-6').eq(0).find('h4').text())
})
