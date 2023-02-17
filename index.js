const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");


const contract = require('./mint-nft');

// Static template
 router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'))
});

// View pug for dynamic template
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/', router);
app.use(express.static('public'));

// fpr post json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false,
}));

const sync_count_view = async() => {
    var count = await contract.get_count();
    router.get("/mint", (req, res) => {
        res.render("mint", {'count':count});
        });

    //add the router
    router.post("/mint", (req,res) =>{
        // const request = req.body;
        // res.json(request);
        const increase_count = async () => {
            const increase = await contract.increase_count();
            var count = await contract.get_count();
            res.render("mint", {'count':count});
          };
        increase_count()

    })

    app.listen(3001, ()=>{
        console.log("Server is up and running")
    })
}
sync_count_view()


