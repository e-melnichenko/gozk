import { FORMS } from "../config";
import Popup from "./Popup";

export default function initForm() {
  document.addEventListener('submit', async function(e) {
    const form = e.target.closest('.js-form');
    if(!form) return

    e.preventDefault();

    if (!isFormCorrect(form)) return

    const formData = new FormData(form);
    const { action } = form;
    const formName = form.dataset.name;

    form.classList.add('_loading');

    try {
      const res = await fetch( action, {
         method: 'post',
         body: formData
      });
      const data = res.json();

      if(data.success !== true) {
        throw new Error('form response success is not true')
      }

      FORMS[formName].onSuccess(data)
      form.reset();
    } catch(e) {
      console.error(e);
      Popup.open('error-popup');
    }

    form.classList.remove('_loading');
  });

  document.addEventListener('input', (e) => {
    const target = e.target.closest('.js-required');
    if(!target) return

    removeError(target);
  });

  document.addEventListener('change', onFileInputChange);
  document.addEventListener('click', onRemoveFileClick)
}

const regexp = {
  phone: /\+7 \d{3}-\d{3}-\d{2}-\d{2}/, // +7 (999)-999-99-99
  name: /[а-яёa-z\s]+$/i, // одна и более букв латиницы или кириллицы или пробел
  message: /.+/,  // хотя бы один символ
  email: /.+@.+\..+/, // t@t.t где t - хотя бы один символ
}

function isFormCorrect(form) {
  let result = true;

  form.querySelectorAll('.js-required').forEach(input => {
    const inputName = input.dataset.name;

    if (
      input.type === 'checkbox' && input.checked ||
      ['text', 'textarea'].includes(input.type) && regexp[inputName].test(input.value.trim()) ||
      input.type === 'file' && input.files[0]
    ) {
      return
    }

    result = false;
    addError(input);
  })

  return result
}

function addError(input) {
  input.closest('.js-form-item').classList.add('_error');
}

function removeError(input) {
  input.closest('.js-form-item').classList.remove('_error');
}

function onFileInputChange(e) {
  const target = e.target.closest('.js-file-input');
  if(!target) return

  const formItem = target.closest('.js-form-item');
  const fileName = e.target.files[0].name;

  formItem.classList.add('_filled');
  formItem.querySelector('.js-text').textContent = fileName;
}

function onRemoveFileClick(e) {
  const target = e.target.closest('.js-remove-file');
  if(!target) return

  const formItem = target.closest('.js-form-item');

  formItem.querySelector('.js-file-input').value = null;
  formItem.querySelector('.js-text').textContent = null;
  formItem.classList.remove('_filled');
}
