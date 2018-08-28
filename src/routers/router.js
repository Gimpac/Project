//导入express
const express = require("express")

const path = require("path")

//创建路由对象

const router = express.Router()

//导入控制器
//因为要把代码给控制器,这里不做代码逻辑问题
const accountCTRL = require(path.join(__dirname,"../controllers/controllersRouter.js"))