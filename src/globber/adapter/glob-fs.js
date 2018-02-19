// const engine = require('glob-fs')({ gitignore: true });
const engine = require('glob-fs')();

// const exclude = (pattern) => {
//   .exclude(/\.foo$/)
//   .exclude('*.bar')
//   .exclude('*.baz');
// }

module.exports.read = async glob => {
  if (glob.exclude) {
    glob.exclude.forEach(entry => {
      engine.exclude(entry);
    });
  }

  return engine.readdirPromise(glob.include.join(' '));
};
// module.exports.async = async (query) => {
//   const res = await glob.readdirPromise(query);
//   console.log('res', res);
//   return res;

// };
module.exports.readSync = query => engine.readdirSync(query);
