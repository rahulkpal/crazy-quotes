const file = require('./quotes.json');

exports.oneQuote = (type = 'Movie') => {
  let quotes = file.filter(quote => quote.type === type);
  return quotes[Math.floor(Math.random() * quotes.length)];
}

exports.allQuote = (type = 'Movie') => {
  return file.filter(quote => quote.type === type);
}

exports.someQuote = count => {
  let quotes = file,
      start = Math.floor(Math.random() * (quotes.length - count));
  return quotes.slice(start, start + count);
}
