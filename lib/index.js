'use strict'

const path = require('path')
const requireindex = require('requireindex')

module.exports.rules = requireindex(path.join(__dirname, 'rules'))
