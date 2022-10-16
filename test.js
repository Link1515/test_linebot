import express from 'express'
import axios from 'axios'

const app = express()

axios.defaults.timeout = 40000

app.get('/ajax', async (req, res) => {
  try {
    const { data } = await axios.get(encodeURI('https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&Keyword=排球場'))
    return res.send({ data: data.length })
  } catch (error) {
    console.log(error)
    return res.send('error')
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server running...')
})
