const scriptRootPath = path.join(repositoryRootPath, 'script');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const flattenedArray = arr => [].concat(...arr);