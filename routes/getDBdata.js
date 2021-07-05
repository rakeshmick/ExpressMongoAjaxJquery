const { json } = require('body-parser');
var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');

/* GET users listing. */


router.get('/', (req, res) => {
   
const uri = "mongodb://localhost:27017"

var  client = new MongoClient(uri,{ useUnifiedTopology: true } );
    client.connect( function(err, db) {
        if (err) throw err;
        var dbo = db.db("myNewDB");
        dbo.collection("userData").findOne({
            name: 'Sue'    
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

module.exports = router;