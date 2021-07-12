const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Used in a Param middleware in tourRoutes.js
// Will check the id before the middleware stack gets to the other middleware handler functions
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val} `);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  //   console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      // send the newly created object as a response
      // 201 stands for 'Created'
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  // Then some code to actually receive, and update the data, then return the updated data in the response. Not gonna do that now

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  // Then some code to actually delete part of the data. Not gonna do that now

  // 204 means 'no content'. We usually don't send any data. Instead we send null to show that the resourse we deleted no longer exists. Postman then wouldn't even show the json that we send below
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
