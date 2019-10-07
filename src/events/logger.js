'use-strict';

const events = require('./file-events');

events.addListener('error', (error, type) => console.err(`Experienced error duing ${type}: ${error}`));

events.addListener('read', (file, data) => console.log(`Read file "${file}": ${data}`));

events.addListener('write', file => console.log(`${file} saved.`));
