import express from 'express';
import schema from './schema';

var app = express();

schema.applyMiddleware({
    app
})

app.listen(4000);
console.log("Server is running on localhost:4000")