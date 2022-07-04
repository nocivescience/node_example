const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
    'hbs',
    engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    })
);
app.set('view engine', 'hbs');
app.use(morgan('dev'));
app.use(require('./controllers/task.controllers'));
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});