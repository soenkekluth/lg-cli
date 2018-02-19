// const defaults = require('./defaults');
const { to } = require('../utils');
const Glob = require('../data/glob');
const create = require('./adapter');

const globber = id => {
  const engine = create(id);
  return {
    async read(pattern, opts = {}) {
      const glob = new Glob(pattern, opts);

      // console.log('entries', glob.entries);
      // console.log('include', glob.include);
      // console.log('exclude', glob.exclude);
      const entries = await engine.read(glob);
      if(entries){
        return entries;
      }
      return [];
    },
    readSync(pattern, opts = {}) {
      const glob = new Glob(pattern, opts);
      return engine.readSync(glob);
    },
  };
};

module.exports = globber;
