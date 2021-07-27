const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// Param middleware
// router.param('id', tourController.checkID);

// prettier-ignore
router
   .route('/')
   .get(tourController.getAllTours)
   .post(tourController.checkBody, tourController.createTour);

// prettier-ignore
router
   .route('/:id')
   .get(tourController.getTour)
   .patch(tourController.updateTour)
   .delete(tourController.deleteTour);

module.exports = router;
