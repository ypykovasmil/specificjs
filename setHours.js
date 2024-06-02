const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};