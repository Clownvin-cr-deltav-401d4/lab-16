'use-strict';

const eventListeners = {};

const fileEvents = {
  emittedEvents: [],
  emit: function(event, ...args) {
    this.emittedEvents.push({event, args: args});
    if (eventListeners[event]) {
      for (const listener of eventListeners[event]) {
        listener(...args);
      }
    }
  },
  addEventListener: function(event, listener) {
    if (!eventListeners[event]) {
      eventListeners[event] = [];
    }
    eventListeners[event].push(listener);
  }
}

module.exports = exports = fileEvents;
