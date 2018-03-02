const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const ordersController = require( `./controllers/orderHistory` );
const loginController = require( `./controllers/loginController` );

const routeLevel = require('./middleware/routeLevel');
const appLevel = require('./middleware/appLevel');

//middleware for sessions
const loginSession = require('./middleware/login');

const app = express();

app.use( bodyParser.json() );
app.use(session({
  secret: 'my-session-secret',
  saveUninitialized: false,
  resave: true
}))
app.use( appLevel )
app.use( loginSession )

app.get('/api/orders', routeLevel, ordersController.getAllOrders)
app.get('/api/order/:id', ordersController.getSpecificOrder)

//login
app.get('/api/login', ordersController.getSpecificOrder)



const port = process.env.PORT || 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
