const currentDate = () => new Date().toLocaleDateString('en-US');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const channel = getChannel(computedAppVersion);