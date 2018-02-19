const renderer = name => {
  let engine;
  switch (name) {
    case 'table':
      engine = require('./table');
      break;
    case 'list':
      engine = require('./list');
      break;

    default:
      engine = require('./log');
      break;
  }

  return {
    render(items) {
      return engine.render(items);
    },
  };
};

module.exports = renderer;
