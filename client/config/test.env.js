'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  apiKey: '"AIzaSyBABC2pBQh1jHcl7ryqLNE2SZg5hhnPzgs"',
  authDomain: '"guitartabs-31a41.firebaseapp.com"',
  databaseURL: '"https://guitartabs-31a41.firebaseio.com"',
  projectId: '"guitartabs-31a41"',
  storageBucket: '"guitartabs-31a41.appspot.com"',
  messagingSenderId: '"1044003875373"'
})
