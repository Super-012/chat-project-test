const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
let UserNumber = 0;

app.get('/', (req,res) => {
   res.sendFile(`${__dirname}/public/index.html`) 
})

app.get('/test', (req,res) => {
   res.sendFile(`${__dirname}/public/test.html`) 
})



io.on('connection', (socket) => {
   console.log("A new user has logged in (", UserNumber, ")")

   socket.on('chat message', (msg) => {
      io.emit("chat message", msg)
   })

   socket.on('disconnect', () => {
      console.log("A user has logged out (", UserNumber, ")")
   });

});




server.listen(3000, () =>{
   console.log("Server is working")
})