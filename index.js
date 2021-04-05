const express = require('express')

const port = 5000
const password = "burjalarab79"
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://burjalarab:burjalarab79@cluster0.gqi99.mongodb.net/burjalarab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjalarab").collection("booking");
  // perform actions on the collection object

  app.post('/addBooking',(req,res)=>{
      const newBooking = req.body
      collection.insertOne(newBooking);
      console.log(newBooking)
  })
});


app.get('/', (req, res) => {
  res.send('Hello World! i am rana')
})

app.listen(port)