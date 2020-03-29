const express = require("express");
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb+srv://app-user:rvc3BSKids5ishg8@cluster0-b2ujk.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);