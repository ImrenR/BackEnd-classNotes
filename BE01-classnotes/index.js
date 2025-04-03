'use strict'

// const express = require('express');
// const app = express();

// require('dotenv').config();
// const PORT = process.env?.PORT || 8000


 
// Soru 1 // num1 ve num2 toplamini gosteriniz

//  app.get ('/sum', (req,res)=> {
//  const { num1, num2 } =req.query;
//  const sum = parseInt(num1)+ parseInt(num2);
//  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
//  });

// app.listen(PORT, ()=> console.log('Running at:http://127.0.0.1:' + PORT))

// http://127.0.0.1 local machine
// 8000 PORT
// /sum path
// '?num1=20&num2=30 .query

//?Soru 2 : Write the regex expression that matches the required conditions 
//? Route1 : /abc ya da /acd yollariyla eslesen bir router olustur 

// app.get(/\/abc|\/acd/, (req,res)=> {
// res.send ('<h1>Route 1 matched /abc or /acd: </h1>')})

// app.get(/^\/(abc|acd)$/, (req, res) => {
//   res.send(`Path: ${req.path}`);
// });

//?Route2: /a (tek) ile baslyip 2 kez c ya da 3 kez c ile biten bir oute yaziniz

// app.get("/a(*)cc(c?)", (req,res)=> {
//  res.send("<h1>Route 2 matched</h1>")})

 //? Route 3 : Hello ile biten herhangi bir route yaziniz 

//  app.get(/.*Hello$/, (req,res)=> {
//   res.send ("Hello there")
//  });
 
 
//? Route 4 : Hello ile baslayan ve biten bir route olustur 

// app.get (/^\/Hello$/, (req,res)=>{
//   res.send ("Hello you")
// })


//? Soru 3 : I have an object with students information. 
// Code the desired routers

//  const express = require ('express');
// const app = express();
// const router = express.Router();

// // middleware to read Json 
// app.use(express.json());

//  const students = [
//   { id: 1, name: "Alex" },
//   { id: 2, name: "Steve" },
// ];
//! get all the students 

// router.get ("/students", (req,res)=> {
//  res.json (students);
// })

//! Belirli bir ogrencinin infosunu getir

// router.get('/students/:id', (req,res)=> {
//  const id = parseInt(req.params.id);
//   const student = students.find(student => student.id === id);

// if (!student){
//  return res.status(404).json ({message: "Student not found"});

// }
// res.json(student);
// });


// app.use('/', router); // attached the router to the app

// const PORT = 8000;
// app.listen(PORT, () => {
//  console.log(`Server is running on http://localhost:${PORT}`);
// });


// ?Soru 4: Code the instructions below 
// Express framework’ünü import et ve bir Express uygulaması oluştur.
//app.use() kullanarak bir middleware (ara katman) fonksiyonu tanımla. 
// Bu fonksiyon bir mesajı konsola yazdırsın ve next() 
// fonksiyonu ile bir sonraki middleware veya route’a geçiş yapsın.

const express = require ('express');
const app = express();

// middleware function 

// app.use ((req,res, next)=> {
//   console.log('Middleware function is triggered!')
//   next();
// });
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});

//app.get() ile '/' (ana sayfa) için bir route handler (yönlendirici) tanımla.
// Bu handler, root URL’e gelen GET isteklerine "Hello!" cevabını versin.

// app.get('/', (req,res)=>{
//   res.send ('Hello there !');
// })

//Soru 5 :"Aşağıdaki kod bloğunda, 500 durum kodu döndüren ve oluşan hatanın detayını içeren özel bir hata middleware'i eksik.
//  Kodu tamamla."



app.use((req,res,next)=>{
  throw new Error ('Something went wrong') // bu middleware fonk her istek geldiginde bilerek hata atiyor
})
// bu hatayi ozel olarak yakalamamiz gerekiyor. Burada custom error middleware devreye giriyor

const errorHandler = (err,req,res,next) => { //! err; hata objesi res.tatus (500) 500 hata kodunu gonderir
  res.status(500).json ({ 
    error : { message: err.message }
  })
}

app.use(errorHandler);