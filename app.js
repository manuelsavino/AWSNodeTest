const express = require('express'),
      app = express();
      PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})



