const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/acceleration-data', (req, res) => {
  const acceleration = req.body.acceleration;
  const accelerationIncludingGravity = req.body.accelerationIncludingGravity;
  const rotationRate = req.body.rotationRate;
  const interval = req.body.interval;

  // Print the acceleration data on the server console
  console.log(`Acceleration: ${acceleration.x}, ${acceleration.y}, ${acceleration.z}`);
  console.log(`Acceleration including gravity: ${accelerationIncludingGravity.x}, ${accelerationIncludingGravity.y}, ${accelerationIncludingGravity.z}`);
  console.log(`Rotation rate: ${rotationRate.alpha}, ${rotationRate.beta}, ${rotationRate.gamma}`);
  console.log(`Interval: ${interval}`);

  res.status(200).send('Acceleration data received.');
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
