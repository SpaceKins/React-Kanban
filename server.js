const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const db = require('./models');
const Card = db.Card;
const public = path.join(__dirname, 'public');

const Priorities=db.Priority;
const Users=db.User;

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({
    extended: false
}))
//app.use()

//app.use('/test',express.static(path.join(__dirname,'public/test')));
app.use('/', express.static(public));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
})

app.get('/getPriorities',function(req,res){
  console.log('getPriorities');

  Priorities.findAll({attributes:['id','priority']})
  .then(
    function(data){
      console.log('Got id');
     // console.log(data);

      data.forEach(function(cur){

      })

    
    res.json(data);
    }
    );
});

app.get('/getUsers',function(req,res){
  console.log('getUsers');

  Users.findAll({attributes:['id','first_name']})
  .then(
    function(data){
        data.forEach(function(cur){
            console.log(cur.first_name);
      })      
   
    res.json(data);
    }
    );
});

app.get('/create', function(req, res) {
    console.log('In here');
    res.json({});
})

app.get('/test', function(req, res) {
    console.log('In here');
    res.json({});
})

app.post('/create', function(req, res) {
    var bodyData = req.body;
    console.log('*****  Body *********');
    console.log(bodyData);
    console.log('In Post');

    if (dataExistForAll(['title','priority','status','assignedTo'],bodyData)) {
        Card.create({
            title: bodyData.title,
            priority: bodyData.priority,
            status: bodyData.status,
            assignedTo:bodyData.assignedTo
        })
            .then(function() {
                res.json({});
            })
    } else {
        res.json({});
    }

})


/*
app.get('/',function(req,res){
  console.log('In here');
  res.json({});
})
*/

app.listen(app.get('port'), function() {
    console.log(`Server listening on port ${app.get('port')}`); // JS Template literal
})


function dataExistForAll(keyList, objectData) {
    var keyListCount = keyList.length;
    console.log('lenght = ' + keyListCount);
    console.log(keyList);
    console.log(objectData);
    for (var i = 0; i < keyListCount; i++) {
      console.log(objectData[keyList[i]]);
      
        if (!dataExist(objectData[keyList[i]])) {
            console.log('Not all Data Exist');
            return false;
        }
    }


    console.log('All Data Exist');
    return true;
}

function dataExist(thisData) {
    if (thisData != "") {
        return true;
    }

    return false;
}