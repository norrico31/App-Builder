const express = require('express');
const path = require('path');
const expbhs = require('express-handlebars');
const app = express();

// static folder
app.use(express.static(path.resolve(__dirname, 'public')));

// handlebars 
app.engine('handlebars', expbhs({ defaultLayout: 'main', layoutsDir: path.resolve(__dirname, 'views/public')}));
app.set('view engine', 'handlebars');


// routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`[server.js]: running on PORT ${PORT}`));