const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const apmRootPath = path.join(repositoryRootPath, 'apm');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};