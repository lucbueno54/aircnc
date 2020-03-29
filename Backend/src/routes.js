const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotControlles');
const DashboardContrller = require('./controllers/DashboardContreller');
const multer = require('multer');
const UploadConfig = require('./confg/upload');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(UploadConfig);

routes.post('/sessions',SessionController.store);
routes.post('/spots',upload.single('thumbnail'),SpotController.Storage); 

routes.get('/spots',SpotController.index);
routes.get('/dashboard',DashboardContrller.Show);

routes.post('/spots/:spot_id/bookings',BookingController.Store);

module.exports = routes;