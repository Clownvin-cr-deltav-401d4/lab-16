'use strict';

require('./src/events/logger');

const events = require('./src/events/file-events');
const {readFile, writeFile} = require('./src/edit-file');

events.addListener('read', (file, data) => {
  data = data.toString().toUpperCase();
  writeFile(file, data);
});

if (process.argv.length > 2) {
  readFile(process.argv.slice(2).shift());
}
