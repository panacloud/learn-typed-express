/// <reference path='../typings/tsd.d.ts' />

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
export default mongoose;