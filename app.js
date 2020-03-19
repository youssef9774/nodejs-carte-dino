require('./config/keys');

const express = require('express') ;
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();


//db config
const db = require('./config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log('mongo db connected...'))
.catch  (err=>console.log(err));


app.use(express.urlencoded({
    extended: true 
}));

//ejs
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs'); 

//routes
app.use('/users', require('./routes/users'));
app.use('/',require('./routes/index'));
 
const PORT = process.env.PORT || 2000
app.listen(PORT , console.log("server in port 2000 ")); 


