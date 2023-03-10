const express = require("express");
const app = express();
const PORT = process.env.PORT || 7222;
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Customers = require("./models/Customers");

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json

app.use(express.json())
const { engine } = require("express-handlebars");
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

//  const myjobs = fs.readFileSync(path.join(__dirname,'jobs.json'), 'utf-8') //reading the file just once
// const changeJobs = JSON.parse(myjobs) //changing it from json to javascript format

// const mymessages = fs.readFileSync(path.join(__dirname,'messages.json'), 'utf-8') //reading the file just once
// const changeMessages = JSON.parse(mymessages) //changing it from json to javascript format

mongoose.set("strictQuery", false);
const uri =
  "mongodb+srv://adigun:hakeem@cluster0.ncmalbd.mongodb.net/Upconstruction?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  //  useCreateIndex: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, connectionParams)
  .then((data) => {
    console.log("DATABASE CONNECTION SET");
  })
  .catch((err) => {
    console.log(err);
  });

  app.get('/contact', (req, res) => {
    res.render('datas/contact')
}) 

app.post("/contact", async (req, res) => {
 
  try {
    const construct = await Customers.create({
     name: req.body.name,
      email: req.body.email,
      subject: req.body.subject, 
      message: req.body.message,
    });
    await construct.save();
    res.redirect("/contact");
  } catch (e) {
    res.status(400).json({
    status : 400,
     message: 'data failed request ',
     data: e.message
     })
    console.log(e.message);
  }
});

//trying
app.get("/contact", async (req, res) => {
  try {
const tech = Customers.find();
res.status(201).json({
   status: 200,
   data: tech
})
  } catch (e){
   res.status(401).json({
     // status: 'api called failed',
     // data: e.message 
   })
  }''
   });


app.get("/", (req, res) => {
  res.render("datas/index", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/about", (req, res) => {
  res.render("datas/about", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/blog-details", (req, res) => {
  res.render("datas/blog-details", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/blog", (req, res) => {
  res.render("datas/blog", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/contact", (req, res) => {
  res.render("datas/contact", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/project-details", (req, res) => {
  res.render("datas/project-details", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/projects", (req, res) => {
  res.render("datas/projects", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/sample-inner-page", (req, res) => {
  res.render("datas/sample-inner-page", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/service-details", (req, res) => {
  res.render("datas/service-details", {
    styles: "main.css",
    js: "main.js",
  });
});

app.get("/services", (req, res) => {
  res.render("datas/services", {
    styles: "main.css",
    js: "main.js",
  });
});

app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
