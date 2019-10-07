'use strict';

const fs = require('fs');

const events = require('../events/file-events');

async function readFile(file) {
  let fileData;
  let readError;
  await fs.readFile(file, (err, data) => {
    readError = err;
    fileData = data;
  });
  if (readError) {
    events.emit('error', 'read', readError);
  } else {
    events.emit('open', file, fileData);
    return fileData;
  }
}

async function writeFile(file, data) {
  let writeError;
  if (!(data instanceof Buffer)) {
    data = buffer.from(data);
  }
  await fs.writeFile(file, data, (err) => {
    writeError = err;
  });
  if (writeError) {
    events.emit('error', 'write',readError);
  } else {
    events.emit('write', file, data);
  }
}

module.exports = exports = {readFile, writeFile};
