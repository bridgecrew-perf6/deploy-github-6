const express= require('express');
require('dotenv').config();

const app = express();
// const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => res.send(`<h1> Execuntando na porta: ${PORT} </h1>`));
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});