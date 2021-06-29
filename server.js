const express = require("express");
const exphbs = require('express-handlebars');



const generalcontroller = require("./controllers/generalcontroller.js")
const productcontroller = require("./controllers/productcontroller.js")
const usercontroller = require("./controllers/usercontroller.js")

const middleware1 = require("./middleware/validation.js")

//Create Express App Object
const app = express();

//middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//This loads static assets
app.use(express.static("public"));


app.use(express.json());
app.use(express.urlencoded({extended: true})); 





app.use("/",generalcontroller);
app.use("/",productcontroller);
app.use("/",usercontroller);





const port = 3000;

app.listen(process.env.PORT || port, () => console.log(`Web Server Application is up and running on port ${port}`));


