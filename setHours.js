const merge = Object.assign({}, obj1, obj2);
const getRandomBoolean = () => Math.random() >= 0.5;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');