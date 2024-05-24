const randomBoolean = () => Math.random() >= 0.5;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];