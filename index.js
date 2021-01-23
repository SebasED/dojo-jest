const express = require('express')
const app = express()
const services = require('./codebreaker.js')
let numberCodeBreaker = 0
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/activate', function (req, res) {
    const number = req.query.number;
    if (number.length > 4) {
        throw new error ('Ingrese por favor cuatro números enteros');
    }else {
        numberCodeBreaker = number;
        res.send('funcionó')
    }
});

app.post('/codebreaker', function (req, res){
    if(numberCodeBreaker !== 0){
    console.log(numberCodeBreaker);
    let tryNumber = req.query.number;
    let response = services.codeBreaker(tryNumber, numberCodeBreaker);
    res.send(response);
    }else{
        throw new error ('Ingrese a la opción activate para ingresar número para el codebreaker');
    }
})  
 
app.listen(3000)