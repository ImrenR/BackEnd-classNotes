 const express = require ('express'); //Express kutuphanesini projeye dahil ettim
 const app = express (); // Express uygulamami baslattim
 const PORT = 8000;

// 9. soru Middleware ile gelen istegi logla
// asagida gorulen bir middleware fonksiyonudur
function logRequest (req,res, next) {
  console.log(`$ {req.method} ${req.url}`);
   next();
}
app.use(logRequest);


app.listen(PORT, ()=> console.log(`Running at: http://127.0.0.1:${PORT}`))
// Test routelari 

app.get ('/', (req,res) =>{
  res.send ('Anasayfa')
})


