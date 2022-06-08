//Dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const blog_router = require('./routers/blogRoutes.js');
const user_router = require('./routers/userRoutes.js');
const app = express();



// cors
var corsOptions = {
    origin: 'https://localhost:8030'
}

// Middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
// blog router


app.use('/api/posts', blog_router);

// user router


console.log('server')
app.use('/api/users', user_router);

// Testing API
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' });
});

//port
const PORT = process.env.PORT || 3000;

//Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

