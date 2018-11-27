var express = require('express');
var router = express.Router();
// Load the full build.
var _ = require('lodash');
var Student = require('../models/student');

//import * as myUtils from  '../utils/utils';
import {add, welcome} from  '../utils/utils';

/* GET home page. */
router.get('/', function (req, res) {

  var s1 = new Student("Sima");
  s1.sayName();

  var allStudents = ['danny', 'avi', 'michal', 'jasmine', 'shimi', 'evyatar'];

  var output = _.chunk(allStudents, 2);
   


  res.json(output);

});

module.exports = router;
