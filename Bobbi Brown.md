# Bobbi Brown 接口文档

*Joshua Li | 2019-05-06*

----

## 目录结构

+ 微站：*http://www.beautywelltraveled.com*
+ 游戏：*http://www.beautywelltraveled.com/game/*
+ 兑换：*http://www.beautywelltraveled.com/redeem/*
+ 接口：*http://www.beautywelltraveled.com/interface/*
+ 工具：*http://www.beautywelltraveled.com/tools/*



## 接口

1. 生成登机牌

   + 地址

     ```
     http://www.beautywelltraveled.com/interface/create
     ```

   + 方法

     ```
    POST
     ```
   
   + 入参

     ```json
    {
     	"userId": ""
     }
     ```
   
   + 输出

     ```json
    {
     	"status": 200,
   	 	"msg": "success",
     	"info": {
     		"img_path":"",
             "code":""
     	}
     }
     ```

   + 说明

     
   
2. 校验兑换码

   + 地址

     ```
     http://www.beautywelltraveled.com/interface/verifyCode
     ```

   + 方法

     ```
     POST
     ```

   + 入参

     ```json
     {
     	"userId": "",
     	"code": ""
     }
     ```

   + 输出

     ```json
     {
     	"status": 200,
     	"msg": "success",
     }
     ```
   
   + 说明
   
     

## 数据结构

