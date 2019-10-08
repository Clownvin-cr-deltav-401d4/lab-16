'use-strict';

const events = require('./file-events');

events.on('error', (error, type) => console.error(`Experienced error duing ${type}: ${error}`));

events.on('read', (file, data) => console.log(`Read file "${file}": ${data}`));

events.on('write', file => console.log(`${file} saved.`));
