var express = require('express')
var data = require('./data.json')
const socketIO = require('socket.io');
const http = require('http');
var path = require('path')
var app = express()
let server = http.createServer(app)
let io = socketIO(server)
app.use(express.static(__dirname + '/public'));
// setting the view engine to ejs
app.set('view engine', 'ejs')
app.get('/pi/security', (req, res, next) => {
    // rendering the ejs file
    res.render('index', {
    })
})
app.get('/pi/security/sensors', (req, res, next) => {
    // rendering the ejs file
    res.render('sensors', {
    })
})
app.get('/pi/security/actuators', (req, res, next) => {
    // rendering the ejs file
    res.render('actuators', {
    })
})
app.get('/pi/security/sensors/ultrasonic', (req, res, next) => {
    // rendering the ejs file
    res.render('ultrasonic', {
    })
})
app.get('/pi/security/sensors/pir', (req, res, next) => {
    // rendering the ejs file
    res.render('pir', {
    })
})
app.get('/pi/security/actuators/buzzer', (req, res, next) => {
    // rendering the ejs file
    res.render('buzzer', {
    })
})
app.get('/pi/security/actuators/indicatorled', (req, res, next) => {
    // rendering the ejs file
    res.render('indicatorled', {
    })
})
app.get('/pi/security/actuators/securityled', (req, res, next) => {
    // rendering the ejs file
    res.render('securityled', {
    })
})
app.get('/', (req, res, next) => {
    // rendering the ejs file
    res.render('myEJS', {     
    })

})
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('newMessage', {
        from: 'jen@mds',
        Id: data[0].id,
        status1: true,
        status2: false,
        status3: true,
        status4:false,
        status5:false,
        status6: true,
    });

});




server.listen(3000)
console.log('Node.js web server at port 3000 is running..')
