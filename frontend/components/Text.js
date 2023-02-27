export class Text {
  constructor({ text, indexErrorChars }) {
    this._text = text;
    this._indexErrorChars = indexErrorChars;
  }

  _createCharError(char) {
    return `<span class="error">${char}</span>`;
  }

  _validation(text, indexErrorChars) {
    const chars = text.split('');
    for (let index of indexErrorChars) {
      chars[index] = this._createCharError(chars[index]);
    }
    text = chars.join('');
    return text;
  }

  create() {
    if (0 !== this._indexErrorChars.length) {
      this._text = this._validation(this._text, this._indexErrorChars);
    }
    return `<p class="text">${this._text}</p>`;
  }
}
