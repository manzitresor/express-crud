const dontenv = require('dotenv');
const swaggerUi = require('swagger-ui-express')
const express = require('express');
const itemsRouter = require('./routes/items.routes');
const swaggerUiDocs = require('./views/swaggerUiDocs')

const app = express();
const port = process.env.PORT || 3000;

dontenv.config();

app.use('/api/docs',swaggerUi.serve);
app.use('/api/docs',swaggerUi.setup(swaggerUiDocs));
app.use(express.json());
app.use('/api',itemsRouter);



app.listen(port,()=> console.log(`Listening on PORT ${port}`));