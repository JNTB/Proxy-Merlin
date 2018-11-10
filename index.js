const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');

const app = express();
const port = 1130;

app.use(morgan('dev'));

app.use('/pics', function(req, res) {  
  var url = 'http://localhost:1127/pics';
  req.pipe(request(url)).pipe(res);
});

app.use('/api/similar', function(req, res) {  
  var url = 'ec2-13-57-229-94.us-west-1.compute.amazonaws.com:80/api/similar';
  req.pipe(request(url)).pipe(res);
});

app.use('/reviews/:id', function(req, res) {  
  var url = `ec2-18-219-220-100.us-east-2.compute.amazonaws.com:2000/reviews/${req.params.id}`;
  req.pipe(request(url)).pipe(res);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`server listening on port: ${port}`));