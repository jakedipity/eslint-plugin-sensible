'use strict'

const {RuleTester} = require('eslint')
const rule = require('../../../lib/rules/redent')

const Suite = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018
  , sourceType: 'module'
  }
, rules: {
    "indent": 0
  }
})

Suite.run('redent', rule, {
  valid: [
    {code: 'var x = {\n  a: 1\n, b: 2\n}\n'}
  ]
, invalid: [{
    code: 'var x = {\n  a: 1\n  , b: 2\n}\n'
  , errors: [{
      message: 'Expected indentation of 0 spaces but found 2.'
    , type: 'Punctuator'
    }]
  }]
})
