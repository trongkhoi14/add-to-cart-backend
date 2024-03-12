const express = require('express');
require('dotenv').config();
const router = require('./src/routes')
const dbConnect = require('./src/config/dbconnect')
const cookieParser = require('cookie-parser')
const { notFound, errorHandler } = require('./src/middlewares/errorHandling')
const { rateLimiter } = require('./src/utils/rate-limiter');
// documenting express js api swagger
const swaggerUi = require("swagger-ui-express");
const specs = require('./src/config/swagger');


const app = express()
const port = process.env.PORT || 8081

// middleware parse cookie
app.use(cookieParser())

// middleware limit number of requests
app.use(rateLimiter);

app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// middleware parse json and req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// connect to database
dbConnect()

// create router
router(app)

// middleware handle error
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server was running on port ${port}`)
})