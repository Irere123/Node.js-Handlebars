const express = require('express')
const morgan = require('morgan')
const path = require('path')
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Load config 
dotenv.config({ path: './config/config.env'})

// Connec to the database
// connectDB()

// Base Directory
let BASE_DIR = __dirname

// Express app
const app = express()

// Logging
if (process.env.NODE_ENV == 'development') {
   app.use(morgan('dev'))
}

// Handlebars(View Engine)
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static Files (CSS, Images)
app.use(express.static(path.join(BASE_DIR, 'public')))

// Routes
app.use('/', require('./routes/index'))

// Listen To The Port
const PORT = process.env.PORT || 8001

app.listen(PORT, 
   console.log(`----Server running in ${process.env.NODE_ENV} on port \" http://127.0.0.1:${PORT}\ "`)
)

// Handles 404 Errors
app.use((req, res) => {
   res.render('error/404')
})
