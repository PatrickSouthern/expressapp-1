

const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001

app.use(cors())
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({"message":"Hello World!"});
})

app.get('/users/', (req, res) => {    
    res.setHeader('Content-Type', 'application/json');
    let list =        [
        {
      "name":"Gary",
      "age":75,
      "cars": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
      ]},
      {
        "name":"Emily",
        "age":30,
        "cars": [
          { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
          { "name":"BMW", "models":[ "320", "X3", "X5" ] },
          { "name":"Fiat", "models":[ "500", "Panda" ] }
        ]}
      ];
    res.json(list);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})