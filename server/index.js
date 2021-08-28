const express = require('express')
const cors = require('cors')
const app = express();
const parser = require('body-parser');

app.use(express.json());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors());


//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.port || 9000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));