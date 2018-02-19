module.exports.render = (list) => {
  const str = list.map(item => ''+item);
  console.log(str.join('\n'));
};
