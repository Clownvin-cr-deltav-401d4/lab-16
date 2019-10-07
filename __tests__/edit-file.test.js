'use-strict';

jest.mock('fs');
jest.mock('../src/events/file-events');
jest.mock('../src/edit-file');

const {readFile, writeFile} = require('../src/edit-file');
const events = require('../src/events/file-events');

beforeAll(async () => {
  readFile('testfile.txt');
  console.log(events.emittedEvents);
  await setTimeout(() => {}, 1000);
});

describe('Edit file', () => {
  describe('readFile', () => {
    it('Can read files', () => {
      readFile('testfile.txt');
    })
  });
});