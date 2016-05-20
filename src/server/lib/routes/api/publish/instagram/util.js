'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const verifyToken = process.env.APP_SECRET || 'nodeschooldaycr16';

function publish(options) {

  console.log('options.input', options.input);

}

function subscribe(options) {

  return new Promise((resolve, reject)=> {

    console.log('--------------------------', 1);
    console.log('options.request.query');
    console.log(options.request.query);

    options.result = options.input['hub.challenge'];
    resolve(options);

  });
}

// Public
module.exports = {
  publish,
  subscribe
};
