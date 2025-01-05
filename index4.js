import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;


function logger(req, res, next){
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);
  next();
}
app.use(logger);


app.get("/", (req, res) => {
 // console.log(__dirname + "/public/index.html");
  res.sendFile("index.html");
});

app.use(bodyParser.urlencoded({ extended: false}));
app.post("/submit", (req, res)=> {
     console.log(req.body['street']);
     res.send( `<h1>Your band name is</h1> <h2>${req.body['street']} +${req.body['pet']} </h2>`);
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
