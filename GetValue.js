const fullName = name || 'buddy';
const randomString = () => Math.random().toString(36).slice(2);
const apmRootPath = path.join(repositoryRootPath, 'apm');