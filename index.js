const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTitleFormat = tutorials.map(function(titles){
    const splitTitles= (titles.split(' ')).map(function(words){
      const capWords= [(words.charAt(0).toUpperCase() + words.slice(1))];
      return capWords.join(' ');
    });
    return splitTitles.join(' ');
  })
  return newTitleFormat;
}
