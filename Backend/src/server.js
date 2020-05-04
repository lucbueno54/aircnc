const express = require("express");
const routes = require('./routes');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const path = require('path');


mongoose.connect('mongodb+srv://app-user:rvc3BSKids5ishg8@cluster0-b2ujk.mongodb.net/test?retryWrites=true&w=majority',{    
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors());
app.use(express.json());
app.use('/files',express.static( path.resolve(__dirname,'..','Uploads')));
app.use(routes);

app.listen(3333);