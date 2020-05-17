#!/usr/bin/env node

var opts = require('../options.js')
var Linter = require('../custom-engine.js')

opts.linter = new Linter(opts)
require('standard-engine').cli(opts)
