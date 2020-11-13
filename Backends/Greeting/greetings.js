const app = require("express")();
const headers = require("../NodeModules/headers.js");

app.listen(8081);
console.log("Server at 8081 is ON");

// app.use("*", (req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     next();
// })
app.use("*", (req, res, next)=>{
    headers.setHeaders(res);
    next();
})

app.get("/hello",(req,res)=>{
    console.log(req.query);
    res.write("Glad to meet you, "+ req.query.firstName+" "+req.query.lastName);
    res.end();
})

app.get("/bye",(req,res)=>{
    res.write("Good bye!");
    res.end();
});