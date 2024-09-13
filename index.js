const express = require('express');
const itemsRouter = require('./routes/items.routes')
const app = express();
const dontenv = require('dotenv');
dontenv.config();

const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api',itemsRouter)
console.log(process.env.PORT)

app.listen(port,()=> console.log(`Listening on PORT ${port}`))