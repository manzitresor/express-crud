const express = require('express');
const itemsRouter = require('./routes/items.routes')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api',itemsRouter)

app.listen(port,()=> console.log(`Listening on PORT ${port}`))