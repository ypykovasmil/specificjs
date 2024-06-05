const apmRootPath = path.join(repositoryRootPath, 'apm');
const result = await makeHttpRequest(url);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());