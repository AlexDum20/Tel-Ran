// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword'

const app = require('express')();
const headers = require('../NodeModules/headers.js');
const promises = require('../NodeModules/promises.js');
const bodyParser = require('body-parser');
const db = require('./connectionDB.js');

app.listen(8081);
console.log("Server at 8081 is ON");

app.use(bodyParser.json());

app.use('*', (req,res,next)=>{
    headers.setHeaders(res);
    next();
});

// -------- var.1 -------
// app.post('/fill',(req, res)=>{
//     const chunks = [];
//     req.on('data',chunk => chunks.push(chunk));
//     req.on('end', () => {
//         const data = JSON.parse(chunks.join(''));
//         console.log(data);
//     })
//     res.send('OK');
// })

 // ---------- var.2 --------------
// app.post('/fill', (req, res)=>{
//     promises.getPost(req)
//         .then(json => JSON.parse(json))
//         .then(result => {
//             console.log(result);
//             res.send('OK');
//         });
//
// })


// -------- var.3 ---------------
app.post('/fill', (req, res)=>{
    const dbReq = 'INSERT INTO cars VALUES '+ req.body.map(car =>
        "(" +
        "'" + car.reg_number + "'," +
        "'" + car.model + "'," +
        "" + car.year + "," +
        "" + car.engine + "," +
        "" + (car.ac ? 1 : 0) + ")"
    ).join(',');
    console.log(dbReq);
    promises.mySQLReq(db,dbReq)
        .then(result => {
            res.send(result);
        },
            err => {
            console.log(err);
            res.send('ERROR');
            })
})

app.get("/getAllCars",(req,res) => {
    dbReq = "SELECT * FROM cars";
    promises.mySQLReq(db,dbReq)
        .then(result => {res.send(JSON.stringify(result)); res.end()})
})

app.post('/addCar', (req, res)=>{
    const car = req.body;
    const dbReq = `INSERT INTO cars VALUES ('${car.reg_number}', '${car.model}',
      ${car.year}, ${car.engine}, ${car.ac})`;
    console.log(dbReq);
    promises.mySQLReq(db,dbReq)
        .then(result => {
                res.send(result);
            },
            err => {
                res.send(err);
            })
})

app.put("/editCar", (req, res)=>{
    const car = req.body;
    dbReq =  `UPDATE cars SET model="${car.model}", year="${car.year}", engine="${car.engine}", ac="${car.ac}"
        WHERE reg_number = "${car.reg_number}"`;
    promises.mySQLReq(db, dbReq)
        .then(result=>res.send(result), err=>res.send(err));
});


app.delete("/removeCars", (req, res)=>{
    console.log('start');
    dbReq = `DELETE FROM cars WHERE reg_number IN (${req.body.map(id => `'${id}'`).join(",")})`;
    promises.mySQLReq(db, dbReq)
        .then(result => {
            console.log(result);
            res.send(result)
        });
});
