# LAB - 16

## Events
Refactor some filesystem logic to use events

### Author: Calvin Hall

### Links and Resources
* [submission PR](https://github.com/Clownvin-cr-deltav-401d4/lab-16/pull/1)
* [travis](https://www.travis-ci.com/Clownvin-cr-deltav-401d4/lab-16)

## Modules
### edit-file
#### readFile(file)
Reads a file and returns its contents. Also emits a "read" event to the file-events
#### writeFile(file, data)
Writes a file with the data. Also emits a "write" event to the file-events
### file-events
An EventEmitter which represents events for files
### logger
Listens for file-events, and logs them.

#### Running the app
* `npm start`
  
#### Tests
* `npm test`
