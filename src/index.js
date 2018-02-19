// const Glob = require('./model/glob');

const {globberName, rendererName} = require('./globber/defaults');
const globber = require('./globber')(globberName);
const renderer = require('./renderer')(rendererName);
module.exports = Object.assign({}, globber, renderer);

// const exclude = ['!/**/*/node_modules/**', '!**/node_modules/**', '!**node_modules**'/*, '!../node_modules/**'*/];
// const exclude = ['!*.**/*/node_modules/**'];
// const regex = /[\S]+/g;
// const regex = /[\s]+/g;

/*
  // (wildcard) &&
  //   q = q.map(
  //     entry =>
  //       entry.charAt(entry.length - 1).match(/[^*]/) ? entry + '*' : entry
  //   );

  // q = q.concat(exclude);
  // q = q.
  // console.log('q', q);
  */
