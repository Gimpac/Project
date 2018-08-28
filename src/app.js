//开启web服务

const express = require("express")

const path = require("path")

const bodyParser = require('body-parser')

//创建应用
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))





app.listen(8888,'127.0.0.1',err=>{
    if(err) {
        console.log(err);
        
    }
    console.log("ok");
    
})