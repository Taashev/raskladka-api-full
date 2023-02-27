module.exports = function validationText(text) {
  const chars = text.split('');

  const indexRussianChars = [];
  const indexEnglishChars = [];

  const russian = {
    mainLanguage: 'русский',
    indexErrorChars: [],
  };
  const english = {
    mainLanguage: 'english',
    indexErrorChars: [],
  };

  const engReg = /[a-z]/i;
  const rusReg = /[а-я]/i;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (engReg.test(char)) indexEnglishChars.push(i);
    if (rusReg.test(char)) indexRussianChars.push(i);
  }

  if (
    indexEnglishChars.length === indexRussianChars.length ||
    indexRussianChars.length > indexEnglishChars.length
  ) {
    russian.indexErrorChars = indexEnglishChars;
    return russian;
  }

  english.indexErrorChars = indexRussianChars;
  return english;
};
