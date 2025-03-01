const express=require('express');
const parse=require('body-parser');
const firstrouter=require('./Routes/simplerouter');
const db=require('./dbconnect/databaseconnect');
const path = require("path");
const fs = require('fs');

const morgan=require('morgan');
const color =require('colors');




const app=express();


app.use(parse.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname, "./Views"));

app.use(morgan('dev'));
app.use(express.json({}))
app.use(express.json({
  extended:true
}))

 app.post("/citizenquerypost",firstrouter.citizenquerypost)
 app.get("/citizenqueryget",firstrouter.citizenqueryget)
 app.post("/citizencomplaintpost",firstrouter.citizencomplaintpost)
 app.get("/citizencomplaintget",firstrouter.citizencomplaintget)
app.get("/citizenschemeget",firstrouter.citizenschemeget);
app.get("/citizenjobget",firstrouter.citizenjobget)
app.get("/citizenNoticeget",firstrouter.citizenNotice);











const port=process.env.PORT || 2000;


app.listen(port,()=>{

  db.connection();
  console.log("The server started successfully dear");
    });

  

   