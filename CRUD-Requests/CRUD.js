/*
Get = client will get data FROM server according to his rqst
Post = client will post/save data IN server
Put = Update Data in server
Delete = deletes data from server
*/


const { json } = require('express');
const express = require('express') ;
const students = require('./student-data')            // loading students module from student-data.js

const app = express() ;
app.use(express.json())                               // for post rqst


app.listen(4000, ()=> {                               // listened the rqst
    console.log('listening to port 4000') ;
}) ;


///~~~~~~ GET ~~~~~~
app.get('/', (req, res)=> {                           // handling the listened rqst
    res.send('res.send = API is working....') ;
})
app.get('/api/students', (req, res)=>{
    res.send(students) ;  //  res.json nd res.send are same!!
})


///~~~~~~ POST ~~~~~~
app.post('/api/students', (req, res)=>{

    if(!req.body.email)
    {
        res.status(400) ;       // 400 = bad request
        return res.json({error: "email is required....!"})
    }
    const new_user_data = {
        id: students.length + 1 ,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    students.push(new_user_data) ;

    res.send(new_user_data) ;
})


///~~~~~ PUT ~~~~~~
app.put('/api/students/:id', (req, res)=>{
    let ID = req.params.id ;
    let first_name = req.body.first_name ;
    let last_name = req.body.last_name ;
    let email = req.body.email ;

    let index = students.findIndex( (students)=>{
        return ( students.id == Number.parseInt(ID) ) ;      // searching
    })

    if(index >=0)                         // Updating data
    {
        let std = students[index] ;
        std.last_name = last_name ;
        std.first_name = first_name ;
        std.email = email
        res.send(std) ;
    }
    else
        res.status(404) ;
})


///~~~~~~ DELETE ~~~~~~
app.delete('/api/students/:id', (req, res)=>{
    let ID = req.params.id ;
    let index = students.findIndex( (students)=>{
        return ( students.id == Number.parseInt(ID) ) ;      // searching
    })

    if(index >=0)                         // Updating data
    {
        let std = students[index] ;
        students.splice(index, 1) ;     // which index, how many obj
        res.json(std) ;
    }
    else
    {
        res.status(404) ;
        res.end() ;
    }
        
})
