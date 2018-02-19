const create = name => {
  switch (name) {
    case 'glob-fs':
      return require('./glob-fs');
    case 'fast-glob':
    default:
      return require('./fast-glob');
  }
};

module.exports = create;
