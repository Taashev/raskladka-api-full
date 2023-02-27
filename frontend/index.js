import { getHistory, setText } from './utils/api.js';
import { Text } from './components/Text.js';
import { Render } from './components/Render.js';

import {
  form,
  buttonSubmit,
  textarea,
  textareaInfo,
  resultContainer,
  historyList,
} from './utils/constants.js';

let isSubmit = true;

function crateText(text, indexErrorChars) {
  const newText = new Text(text, indexErrorChars);
  return newText;
}

const textAdd = new Render((item) => {
  const newText = crateText(item).create();
  textAdd.addItem(newText);
}, resultContainer);

const historyAdd = new Render((item) => {
  const newText = crateText(item).create();
  historyAdd.addItem(newText);
}, historyList);

textarea.addEventListener('input', (e) => {
  const { value } = e.target;
  if (!isSubmit) {
    setText({ text: value, recordHistory: false })
      .then((text) => {
        resultContainer.textContent = '';
        textAdd.renderItems([text]);
        textareaInfo.textContent = `основной язык: ${text.mainLanguage}`;
      })
      .catch((err) => console.log(err));
  }
});

function handlerFormSubmit(e) {
  e.preventDefault();
  const { value } = textarea;

  if (isSubmit) {
    buttonSubmit.textContent = 'Сбросить';
    setText({ text: value, recordHistory: true })
      .then((text) => {
        isSubmit = false;
        resultContainer.textContent = '';
        textAdd.renderItems([text]);
        textareaInfo.textContent = `основной язык: ${text.mainLanguage}`;
      })
      .then((_) => {
        renderHistory();
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  } else {
    isSubmit = true;
    buttonSubmit.textContent = 'Проверить';
    textarea.value = '';
    resultContainer.textContent = '';
    renderHistory();
  }
}
form.addEventListener('submit', handlerFormSubmit);

function renderHistory() {
  historyList.textContent = '';
  getHistory().then((res) => {
    historyAdd.renderItems(res.history);
  });
}
renderHistory();
