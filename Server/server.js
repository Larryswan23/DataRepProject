const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin:admin@cluster0.eo9g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const playerSchema = new mongoose.Schema({
    Name:String,
    Goals:String,
    Passes:String
});

const playerModel = mongoose.model('playerData', playerSchema);


app.get('/', (req, res) => {
    res.send('Hello World server!')
})

app.post('/api/players', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Goals);
    console.log(req.body.Passes);

    playerModel.create({
        Name:req.body.Name,
        Goals:req.body.Goals,
        Passes:req.body.Passes
    });
    res.send('Data Sent to Server!')
})

app.get('/api/players/:id',(req, res)=>{
    console.log(req.params.id);

    playerModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/players/:id', (req, res)=>{
    console.log('Deleteing : '+req.params.id);

    playerModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
                res.send(error)
            res.send(data);
        })
})

app.put('/api/players/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    playerModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})



app.get('/api/players', (req, res) => {
    playerModel.find((err, data)=>{
        res.json(data);
    })
          
      
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})