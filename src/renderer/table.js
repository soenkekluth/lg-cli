const Table = require('cli-table');
const table = new Table({
  chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' },
  style: { 'padding-left': 0, 'padding-right': 2 }
});

module.exports.render = list => {
  // const table = new Table();
  // table.push({ 'Some key': 'Some value' }, { 'Another key': 'Another value' });

  // console.log('list', list);
  // list.forEach(item => table.push([item]));
  table.push(list);
  console.log(table.toString());
  // return table.toString();
};
