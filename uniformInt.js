const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const flattenedArray = arr => [].concat(...arr);