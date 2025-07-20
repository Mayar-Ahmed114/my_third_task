const request = require ("request")
const forecast =(latitude , longtitude , Callback)=>{

const url = "http://api.weatherapi.com/v1/current.json?key=806156abafc942b2b6100127250807&q=Egypt " +latitude+ "," +longtitude+

request({url , json : true} , ( error , response )=>{
    if(error){
       Callback("Error Has Occured" , undefined)
    }
    else if(response.body.error){
        Callback(response.body.error.message , undefined)
    }
    else{
        Callback(undefined , response.body.location.name + "it is :" + response.body.current.condition.text
             + "and temperture is :" + response.body.current.temp_c )
    }
})
}

module.exports = forecast